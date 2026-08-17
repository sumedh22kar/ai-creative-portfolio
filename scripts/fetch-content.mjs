import fs from "node:fs/promises";
import path from "node:path";

try {
  process.loadEnvFile?.(".env.local");
} catch {
  try {
    process.loadEnvFile?.(".env");
  } catch {
    // env file optional if environment variables are already set
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

async function getJsonFile(filePath) {
  const url =
    `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  const file = await githubRequest(url);

  if (file.type !== "file" || !file.content) {
    throw new Error(`Expected a JSON file at ${filePath}`);
  }

  const decoded = Buffer.from(file.content, "base64").toString("utf8");

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

async function main() {
  console.log("Fetching portfolio content...");

  const projectFiles = await getProjectFiles();

  const projects = [];

  for (const file of projectFiles) {
    console.log(`Reading ${file.name}`);

    const project = await getJsonFile(file.path);

    projects.push(project);
  }

  projects.sort(
    (a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999),
  );

  const categoriesData = await getJsonFile("categories/categories.json");

  const generatedDirectory = path.resolve(
    "src",
    "generated",
  );

  await fs.mkdir(generatedDirectory, {
    recursive: true,
  });

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