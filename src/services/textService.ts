import { StrategyFactory } from "../factories/strategyFactory";
import { CommandsType, ModificationStrategy } from "../interfaces";

export class TextService {
  private strategies: ModificationStrategy[] = [];

  getModificationsFromArgs(argCommands: string[]): CommandsType[] {
    const extractedModifications = argCommands.map((modification) => {
      const [type, option] = modification.split(":");
      return { type, option };
    });
    return extractedModifications;
  }

  loadModifications(modifications: CommandsType[]): void {
    modifications.forEach(({ type, option }) => {
      const modification = StrategyFactory.createStrategy({ type, option });
      this.strategies.push(modification);
    });
  }

  processText(inputFileText: string) {
    let modifiedText = inputFileText;

    this.strategies.forEach((strategy) => {
      modifiedText = strategy.modify(modifiedText);
    });

    return modifiedText;
  }
}
