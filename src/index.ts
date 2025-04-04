import fastify from "fastify";
import fs from "fs/promises";
import path from "path";

const app = fastify();

const docsPath = path.join(__dirname, "../output/index.md");

app.get("/", async (request, reply) => {
  const docs = await fs.readFile(docsPath);

  reply.header("Content-Type", "text/markdown");

  return reply.send(docs);
});

app.listen({ port: 3000 }, () => {
  console.log("Server is running on port 3000");
});
