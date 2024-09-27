import { text } from "stream/consumers";
import { registerStrategiesByVersion } from "../factories/strategyRegistration";
import { TextService } from "../services/textService";

describe("TextProcessor", () => {
  it("should return the original text if no modifications are registered", () => {
    const textService = new TextService();
    const wrongModificaiton = "notExistingBadOption";
    try {
      textService.loadModifications([
        {
          type: wrongModificaiton,
        },
      ]);
    } catch (e: any) {
      expect(e.message).toBe(
        `Check if your modification is allowed in your current plan: ${wrongModificaiton}`
      );
    }
  });
});
