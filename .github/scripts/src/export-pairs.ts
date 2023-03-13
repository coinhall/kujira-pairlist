import path from "path";
import fs from "fs";
import { fin } from "kujira.js";

export const getRootDir = (): string => {
  const rootDir = process.env.ROOT_DIR;
  if (!rootDir) {
    console.error("Missing ROOT_DIR env variable");
    process.exit(1);
  }
  return rootDir;
};

export function writeToJson(filePath: string, json: object) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2).concat("\n"));
}

function main() {
  const filePath = path.join(getRootDir(), "fin-pairs.json");
  console.log("Writing fin.PAIRS to", filePath);
  writeToJson(filePath, fin.PAIRS);
}

main();
