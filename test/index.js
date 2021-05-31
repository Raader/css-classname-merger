const chai = require("chai");
const expect = chai.expect;

const { mergeClassNames, switchClassNames } = require("../index");

describe("merging css clasnames", function () {
  describe("merge class names", function () {
    it("should merge classes", function () {
      const unifiedClass = mergeClassNames(
        { name: "button", condition: true },
        { name: "selected", condition: true }
      );
      expect(unifiedClass).to.equal("button selected");
    });
    it("should merge classes", function () {
      const unifiedClass = mergeClassNames(
        { name: "button", condition: true },
        { name: "selected", condition: false },
        { name: "hover", condition: true }
      );
      expect(unifiedClass).to.equal("button hover");
    });
    it("should merge classes", function () {
      const unifiedClass = mergeClassNames(
        { name: "nav", condition: true },
        { name: "xl", condition: true },
        { name: "selected", condition: true }
      );
      expect(unifiedClass).to.equal("nav xl selected");
    });
    it("should return empty string", function () {
      const unifiedClass = mergeClassNames();
      expect(unifiedClass).to.equal("");
    });
  });
  describe("switch class names", function () {
    it("should switch between classes", function () {
      const classNames = ["button", "button-hover", "button-selected"];
      expect(switchClassNames(0, classNames)).to.equal(classNames[0]);
      expect(switchClassNames(2, classNames)).to.equal(classNames[2]);
    });
    it("should switch between two classes(boolean)", function () {
      const classNames = ["button", "button-hover"];
      expect(switchClassNames(true, classNames)).to.equal(classNames[1]);
      expect(switchClassNames(false, classNames)).to.equal(classNames[0]);
    });
  });
});
