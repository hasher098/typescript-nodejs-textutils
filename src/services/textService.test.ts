import { text } from "stream/consumers";
import { registerStrategiesByVersion } from "../factories/strategyRegistration";
import { TextService } from "./textService";
import { VERSIONS } from "../interfaces";

describe("TextProcessor", () => {
  it("should apply a lowercase modification correctly", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    textService.loadModifications([
      {
        type: "lowercase",
      },
    ]);
    const result = textService.processText("HELLO WORLD");
    expect(result).toBe("hello world");
  });

  it("should apply a uppercase modification correctly", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    textService.loadModifications([
      {
        type: "uppercase",
      },
    ]);
    const result = textService.processText("hello woRLD");
    expect(result).toBe("HELLO WORLD");
  });

  it("should apply a reverse modification correctly", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    textService.loadModifications([
      {
        type: "reverse",
      },
    ]);
    const result = textService.processText("HELLO WORLD");
    expect(result).toBe("DLROW OLLEH");
  });

  it("should apply a remove modification correctly", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    textService.loadModifications([
      {
        type: "remove",
        option: "L",
      },
    ]);
    const result = textService.processText("HELLO WORLD");
    expect(result).toBe("HEO WORD");
  });

  it("should apply all  modifications correctly", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    textService.loadModifications([
      {
        type: "uppercase",
      },
      {
        type: "reverse",
      },
      {
        type: "lowercase",
      },
      {
        type: "remove",
        option: "row",
      },
    ]);
    const result = textService.processText("hello world");
    expect(result).toBe("dl olleh");
  });
  it("should apply modifications from args (not from direct loading)", () => {
    const textService = new TextService();
    registerStrategiesByVersion();
    const modifications = textService.getModificationsFromArgs([
      "uppercase",
      "remove:H",
    ]);
    textService.loadModifications(modifications);
    const result = textService.processText("hello world");
    expect(result).toBe("ELLO WORLD");
  });
  it("should return the original text if no modifications are registered", () => {
    const textService = new TextService();
    const result = textService.processText("hello world");
    expect(result).toBe("hello world");
  });
  it("should throw error while trying to use remove without adding which char to remove", () => {
    const textService = new TextService();
    try {
      textService.loadModifications([
        {
          type: "remove",
        },
      ]);
    } catch (e: any) {
      expect(e.message).toBe(`A non-empty string to remove must be provided.`);
    }
  });

  it("should check if premium strategy works when register premium strategies", () => {
    registerStrategiesByVersion(VERSIONS.PREMIUM);
    const textService = new TextService();

    textService.loadModifications([
      {
        type: "add",
        option: "RANDOM",
      },
    ]);
    const result = textService.processText("hello world");
    expect(result).toBe("hello worldRANDOM");
  });

  it("should throw error while trying to add word without providing value", () => {
    registerStrategiesByVersion(VERSIONS.PREMIUM);
    const textService = new TextService();
    try {
      textService.loadModifications([
        {
          type: "add",
        },
      ]);
    } catch (e: any) {
      expect(e.message).toBe(`A non-empty string to add must be provided.`);
    }
  });

  it("should check if premium feature is non available when using free version", () => {
    registerStrategiesByVersion(VERSIONS.FREE);
    const textService = new TextService();
    try {
      textService.loadModifications([
        {
          type: "add",
          option: "randomWord",
        },
      ]);
    } catch (e: any) {
      expect(e.message).toBe(`A non-empty string must be provided.`);
    }
  });
});
