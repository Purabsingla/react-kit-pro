#!/usr/bin/env node

import chalk from "chalk";
import ora from "ora";
// const prompts = await import("prompts");
import prompts from "prompts";

const degit = (await import("degit")).default;
import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

// Step 1: Ask for project name
console.log(chalk.blue.bold("\n✨ React Kit Pro CLI"));
const { projectName } = await prompts({
  type: "text",
  name: "projectName",
  message: "Project name:",
  initial: "my-app",
});

// Step 2: Clone the template
const spinner = ora(`Cloning template to "${projectName}"...`).start();
const emitter = degit("Purabsingla/react-kit-pro", {
  cache: false,
  force: true,
});
await emitter.clone(projectName);
spinner.succeed("Template cloned!");

process.chdir(projectName);

// Step 3: Detect user’s package manager
let packageManager = "npm";
const userAgent = process.env.npm_config_user_agent || "";

if (userAgent.includes("yarn")) packageManager = "yarn";
else if (userAgent.includes("pnpm")) packageManager = "pnpm";
else if (userAgent.includes("bun")) packageManager = "bun";

console.log(
  chalk.cyan(`\n📦 Installing dependencies with ${packageManager}...`)
);
execSync(`${packageManager} install`, { stdio: "inherit" });

// Step 4: Clean up setup files
const setupPath = path.join("scripts", "setup.ts");
if (fs.existsSync(setupPath)) {
  fs.rmSync(setupPath);
  console.log(chalk.gray("🧹 Removed scripts/setup.ts"));
}

const lockBun = "bun.lockb";
if (fs.existsSync(lockBun) && packageManager !== "bun") {
  fs.rmSync(lockBun);
  console.log(chalk.gray("🧼 Removed bun.lockb (user is not using Bun)"));
}

// Remove update-deps script
const pkgPath = path.resolve("package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

if (pkg.scripts?.["update-deps"]) {
  delete pkg.scripts["update-deps"];
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(chalk.gray("🔧 Removed update-deps script"));
}

// Remove CLI bin entry after project setup
if (pkg.bin) {
  delete pkg.bin;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

if (pkg.files) {
  delete pkg.files;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

const cliPath = path.resolve(process.cwd(), "cli");
if (fs.existsSync(cliPath)) {
  fs.rmSync(cliPath, { recursive: true, force: true });
}

const tsconfigPath = path.resolve(process.cwd(), "tsconfig.json");

if (fs.existsSync(tsconfigPath)) {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
  // Filter out the reference to ./cli/tsconfig.json
  if (Array.isArray(tsconfig.references)) {
    tsconfig.references = (tsconfig.references as { path: string }[]).filter(
      (ref) => ref.path !== "./cli/tsconfig.json"
    );
  }

  // Write updated tsconfig back
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2) + "\n");
}

// Step 5: Final message
console.log(chalk.green("\n✅ Setup Complete!"));

console.log(`
Next steps:
  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan(`${packageManager} run dev`)}

Happy coding ✨
`);
