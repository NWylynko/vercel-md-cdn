import fs from "fs/promises";
import path from "path";

const main = async () => {
  const filePath = path.join(__dirname, "../docs/index.md");
  const distPath = path.join(__dirname, "../dist/index.md");

  const index = await fs.readFile(filePath);

  const output = `# Date: ${new Date().toISOString()}
${index}
`;

  await fs.mkdir(path.dirname(distPath), { recursive: true });

  await fs.writeFile(distPath, output);
};

main();
