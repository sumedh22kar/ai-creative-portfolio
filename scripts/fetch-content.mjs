import fs from "node:fs/promises";
import path from "node:path";

try {
  process.loadEnvFile?.(".env.local");
} catch {
  try {
    process.loadEnvFile?.(".env");
  } catch {
    // Environment file is optional when variables are already provided.
  }
}

const owner = process.env.CONTENT_REPO_OWNER;
const repo = process.env.CONTENT_REPO_NAME;
const token = process.env.CONTENT_REPO_TOKEN;

if (!owner || !repo || !token) {
  throw new Error(
    "Missing CONTENT_REPO_OWNER, CONTENT_REPO_NAME or CONTENT_REPO_TOKEN environment variable.",
  );
}

const githubHeaders = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
};

async function githubRequest(url) {
  const response = await fetch(url, {
    headers: githubHeaders,
  });

  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}\n${body}`,
    );
  }

  return response.json();
}

async function getRepositoryFile(filePath) {
  const url =
    `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  const file = await githubRequest(url);

  if (file.type !== "file" || !file.content) {
    throw new Error(`Expected a file at ${filePath}`);
  }

  return file;
}

async function getJsonFile(filePath) {
  const file = await getRepositoryFile(filePath);

  const decoded = Buffer.from(
    file.content,
    "base64",
  ).toString("utf8");

  return JSON.parse(decoded);
}

async function getProjectFiles() {
  const url =
    `https://api.github.com/repos/${owner}/${repo}/contents/projects`;

  const files = await githubRequest(url);

  if (!Array.isArray(files)) {
    throw new Error("The projects directory could not be read.");
  }

  return files.filter(
    (file) =>
      file.type === "file" &&
      file.name.endsWith(".json"),
  );
}

async function downloadProjectMedia(
  mediaPath,
  outputDirectory,
) {
  const file = await getRepositoryFile(mediaPath);

  const extension = path.extname(mediaPath);
  const outputFileName = path.basename(mediaPath);

  const outputPath = path.join(
    outputDirectory,
    outputFileName,
  );

  const mediaBuffer = Buffer.from(
    file.content,
    "base64",
  );

  await fs.writeFile(
    outputPath,
    mediaBuffer,
  );

  console.log(
    `Downloaded media: ${outputFileName}`,
  );

  return {
    fileName: outputFileName,
    extension,
  };
}

const SUPPORTED_PROJECT_TYPES = ["youtube", "image"];

function validateProject(project, existingProjects) {
  const requiredFields = [
    "id",
    "slug",
    "title",
    "category",
    "type",
    "description",
    "aspectRatio",
    "year",
    "published",
    "featured",
    "displayOrder",
  ];

  for (const field of requiredFields) {
    if (
      project[field] === undefined ||
      project[field] === null ||
      project[field] === ""
    ) {
      throw new Error(
        `Project validation failed: "${field}" is required for ${project.id || "unknown project"}.`,
      );
    }
  }

  if (!SUPPORTED_PROJECT_TYPES.includes(project.type)) {
    throw new Error(
      `Project validation failed: Unsupported type "${project.type}" for ${project.id}.`,
    );
  }

  if (
    existingProjects.some(
      (existingProject) => existingProject.id === project.id,
    )
  ) {
    throw new Error(
      `Project validation failed: Duplicate project id "${project.id}".`,
    );
  }

  if (
    existingProjects.some(
      (existingProject) => existingProject.slug === project.slug,
    )
  ) {
    throw new Error(
      `Project validation failed: Duplicate project slug "${project.slug}".`,
    );
  }

  if (
    !Number.isInteger(project.displayOrder) ||
    project.displayOrder < 1
  ) {
    throw new Error(
      `Project validation failed: displayOrder must be a positive integer for ${project.id}.`,
    );
  }

  if (project.type === "youtube") {
    if (!project.thumbnail || !project.mediaUrl) {
      throw new Error(
        `Project validation failed: YouTube project ${project.id} requires thumbnail and mediaUrl.`,
      );
    }
  }

  if (project.type === "image") {
    if (!project.mediaPath) {
      throw new Error(
        `Project validation failed: Image project ${project.id} requires mediaPath.`,
      );
    }
  }
}

async function main() {
  console.log("Fetching portfolio content...");

  const projectFiles = await getProjectFiles();

  const projects = [];

  const generatedDirectory = path.resolve(
    "src",
    "generated",
  );

  const generatedMediaDirectory = path.resolve(
    "public",
    "generated",
    "media",
  );

  await fs.mkdir(generatedDirectory, {
    recursive: true,
  });

  await fs.mkdir(generatedMediaDirectory, {
    recursive: true,
  });

  for (const file of projectFiles) {
    console.log(`Reading ${file.name}`);

    const project = await getJsonFile(file.path);

    validateProject(project, projects);

    if (project.type === "image" && project.mediaPath) {
      const media = await downloadProjectMedia(
        project.mediaPath,
        generatedMediaDirectory,
      );

      project.mediaUrl =
        `/generated/media/${media.fileName}`;
    }

    projects.push(project);
  }

  projects.sort(
    (a, b) =>
      (a.displayOrder ?? 9999) -
      (b.displayOrder ?? 9999),
  );

  const categoriesData = await getJsonFile(
    "categories/categories.json",
  );

  const projectsFile = `export const projects = ${JSON.stringify(
    projects,
    null,
    2,
  )};\n`;

  const categoriesFile = `export const categories = ${JSON.stringify(
    categoriesData.categories ?? [],
    null,
    2,
  )};\n`;

  await fs.writeFile(
    path.join(generatedDirectory, "projects.js"),
    projectsFile,
    "utf8",
  );

  await fs.writeFile(
    path.join(generatedDirectory, "categories.js"),
    categoriesFile,
    "utf8",
  );

  console.log(
    `Successfully generated ${projects.length} projects.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});