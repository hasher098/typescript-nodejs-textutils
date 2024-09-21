import { StrategyFactory } from "../factories/strategyFactory";
import { readTextFile, writeTextFile } from "../utils/fileUtils";

export class TextService {
  async processText(
    inputFile: string,
    outputFile: string,
    modifications: { type: string; value?: string }[]
  ) {
    try {
      let text = await readTextFile(inputFile);

      for (const modification of modifications) {
        const strategy = StrategyFactory.createStrategy(
          modification.type,
          modification.value
        );
        text = strategy.modify(text);
      }

      await writeTextFile(outputFile, text);
      console.log("text written and modified by strategies");
    } catch (error) {
      console.error("Something is not yes:", error);
    }
  }
}
