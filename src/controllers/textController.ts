import { TextService } from "../services/textService";

export async function processText(
  inputFile: string,
  outputFile: string,
  modifications: string[]
) {
  const textService = new TextService();

  const modificationObjects = modifications.map((modification) => {
    const [type, value] = modification.split(":");
    return { type, value };
  });

  await textService.processText(inputFile, outputFile, modificationObjects);
}
