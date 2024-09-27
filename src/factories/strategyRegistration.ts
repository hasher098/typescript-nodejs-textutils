import { VERSIONS, VersionType } from "../interfaces";
import {
  ToUpperCaseStrategy,
  ToLowerCaseStrategy,
  ReverseStrategy,
  RemoveWordStrategy,
  AddWordStrategy,
} from "../strategies";
import { StrategyFactory } from "./strategyFactory";

// In this file we can decide which strategies can be registered
// by default we will register 4 basic strategies (free version)
// in premium one we will register extra strategies

export function registerStrategiesByVersion(
  version: VersionType = VERSIONS.FREE
) {
  StrategyFactory.registerStrategy(
    "uppercase",
    () => new ToUpperCaseStrategy()
  );
  StrategyFactory.registerStrategy(
    "lowercase",
    () => new ToLowerCaseStrategy()
  );
  StrategyFactory.registerStrategy("reverse", () => new ReverseStrategy());
  StrategyFactory.registerStrategy(
    "remove",
    (option) => new RemoveWordStrategy(option || "")
  );

  // premium features
  if (version === VERSIONS.PREMIUM) {
    StrategyFactory.registerStrategy(
      "add",
      (option) => new AddWordStrategy(option || "")
    );
  }
}
