const fs = require("fs/promises");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");


(async () => {
  let urlbase = 'https://kenridev.vercel.app'
  const feed = new RSS({
    title: "KenriDev - Blog",
    description:
      "Tutoriales y tips de Programación con go,nodejs, redis, kafka y más",
    site_url: `${urlbase}`,
    feed_url: `${urlbase}/rss.xml`,
    webMaster: "Kenriortega",
    copyright: `2021-${new Date().getFullYear} Kenriortega`,
    language: "es",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "posts"));

  await Promise.all(
    posts.map(async (file) => {
      const content = await fs.readFile(
        path.join(__dirname, "..", "data", "posts", file)
      );
      const frontmatter = matter(content);
      const item = {
        title: frontmatter.data.title,
        url: `${urlbase}/blog/${file.replace(/\.mdx?/, "")}`,
        date: frontmatter.data.date,
      };
      if (frontmatter.data?.summary) {
        item.description = frontmatter.data.summary;
      }
      if (frontmatter.data?.tags) {
        item.categories = frontmatter.data.tags;
      }

      feed.item(item);
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
  console.log(`🚀 RSS Genearated for ${posts.length} posts`);
})();
