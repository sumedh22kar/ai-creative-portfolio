import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function main() {
  const projectsPath = pathToFileURL(
    path.resolve("src/generated/projects.js")
  ).href;

  const siteConfigPath = pathToFileURL(
    path.resolve("src/generated/siteConfig.js")
  ).href;

  const projectsModule = await import(projectsPath);
  const siteConfigModule = await import(siteConfigPath);

  const projects = projectsModule.projects;
  const siteConfig = siteConfigModule.siteConfig;

  const siteUrl = siteConfig.seo?.siteUrl?.replace(/\/$/, "");

  if (!siteUrl) {
    throw new Error(
      "Missing seo.siteUrl in site configuration.",
    );
  }

  const publishedProjects = projects.filter(
    (project) => project.published !== false,
  );

  const urls = [
    {
      loc: `${siteUrl}/`,
      priority: "1.0",
      changefreq: "weekly",
    },

    ...publishedProjects.map((project) => ({
      loc: `${siteUrl}/project/${project.slug}`,
      priority: "0.8",
      changefreq: "monthly",
    })),
  ];

  const sitemapUrls = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>${sitemapUrls}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  const publicDirectory = path.resolve("public");

  await fs.mkdir(publicDirectory, {
    recursive: true,
  });

  await fs.writeFile(
    path.join(publicDirectory, "sitemap.xml"),
    sitemap,
    "utf8",
  );

  await fs.writeFile(
    path.join(publicDirectory, "robots.txt"),
    robots,
    "utf8",
  );

  console.log(
    `Generated sitemap with ${publishedProjects.length} projects.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
