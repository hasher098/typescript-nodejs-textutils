import { AddEveryWordStrategy } from "../strategies/addEveryWordStrategy";
import { AddWordStrategy } from "../strategies/addWordStrategy";
import { ModificationStrategy } from "../strategies/modificationStrategy";
import { RemoveWordStrategy } from "../strategies/removeWordStrategy";
import { ReverseStrategy } from "../strategies/reverseStrategy";
import { ToLowerCaseStrategy } from "../strategies/toLowerCaseStrategy";
import { ToUpperCaseStrategy } from "../strategies/toUpperCaseStrategy";

export class StrategyFactory {
  static createStrategy(
    modificationType: string,
    value?: string
  ): ModificationStrategy {
    switch (modificationType.toLowerCase()) {
      case "uppercase":
        return new ToUpperCaseStrategy();

      case "lowercase":
        return new ToLowerCaseStrategy();

      case "reverse":
        return new ReverseStrategy();

      case "remove":
        return new RemoveWordStrategy(value || "");

      case "add":
        return new AddWordStrategy(value || "");

      case "addevery":
        console.log("add every", value);
        return new AddEveryWordStrategy(value || "");

      default:
        throw new Error(`Unknown type of modification: ${modificationType}`);
    }
  }
}
