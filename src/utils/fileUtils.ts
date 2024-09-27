import fs from "fs/promises";

export function readTextFile(filePath: string) {
  return fs.readFile(filePath, "utf-8");
}

export function writeTextFile(filePath: string, content: string) {
  fs.writeFile(filePath, content, "utf-8");
}
export function getContentFromInputFile(inputFile: string) {
  return readTextFile(inputFile);
}

export function saveContentToOutput(content: string, outputFile: string) {
  writeTextFile(outputFile, content);
}
