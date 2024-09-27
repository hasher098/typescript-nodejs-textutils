import { CommandsType } from "../interfaces/commands";
import { ModificationStrategy } from "../interfaces/modificationStrategy";

export class StrategyFactory {
  private static strategies: Map<
    string,
    (option?: string) => ModificationStrategy
  > = new Map();

  static registerStrategy(
    type: string,
    creator: (option?: string) => ModificationStrategy
  ) {
    this.strategies.set(type.toLowerCase(), creator);
  }

  static createStrategy(command: CommandsType): ModificationStrategy {
    const strategyCreator = this.strategies.get(command.type.toLowerCase());

    if (!strategyCreator) {
      throw new Error(
        `Check if your modification is allowed in your current plan: ${command.type}`
      );
    }
    return strategyCreator(command.option);
  }
}
