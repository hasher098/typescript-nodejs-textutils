import { ToUpperCaseStrategy } from "../strategies";
import { StrategyFactory } from "./strategyFactory";

describe("TextProcessor", () => {
  it("should not use option that is not registered and throw an error", () => {
    const wrongModificaiton = "notExistingBadOption";
    StrategyFactory.registerStrategy(
      wrongModificaiton,
      () => new ToUpperCaseStrategy()
    );

    try {
      StrategyFactory.createStrategy({ type: "uppercase" });
    } catch (e: any) {
      expect(e.message).toBe(
        `Check if your modification is allowed in your current plan: uppercase`
      );
    }
  });
});
