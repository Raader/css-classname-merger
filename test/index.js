const chai = require("chai");
const expect = chai.expect;

const { mergeClassNames, switchClassNames } = require("../index");

describe("merging css classnames", function () {
  describe("merge class names", function () {
    it("should merge classes(all conditions true)", function () {
      const unifiedClass = mergeClassNames(
        { name: "button", condition: true },
        { name: "selected", condition: true }
      );
      expect(unifiedClass).to.equal("button selected");
    });
    it("should merge classes(all conditions but the middle is true)", function () {
      const unifiedClass = mergeClassNames(
        { name: "button", condition: true },
        { name: "selected", condition: false },
        { name: "hover", condition: true }
      );
      expect(unifiedClass).to.equal("button hover");
    });
    it("should merge classes(only last condition is false)", function () {
      const unifiedClass = mergeClassNames(
        { name: "nav", condition: true },
        { name: "xl", condition: true },
        { name: "selected", condition: false }
      );
      expect(unifiedClass).to.equal("nav xl");
    });
    it("should merge classes(first classname string)", function () {
      const unifiedClass = mergeClassNames(
        "nav",
        { name: "xl", condition: false },
        { name: "selected", condition: true }
      );
      expect(unifiedClass).to.equal("nav selected");
    });
    it("should return empty string", function () {
      const unifiedClass = mergeClassNames();
      expect(unifiedClass).to.equal("");
    });
  });
  describe("switch class names", function () {
    it("should switch between classes", function () {
      const classNames = ["button", "button-hover", "button-selected"];
      expect(switchClassNames(0, ...classNames)).to.equal(classNames[0]);
      expect(switchClassNames(2, ...classNames)).to.equal(classNames[2]);
    });
    it("should switch between two classes(boolean)", function () {
      const classNames = ["button", "button-hover"];
      expect(switchClassNames(true, ...classNames)).to.equal(classNames[1]);
      expect(switchClassNames(false, ...classNames)).to.equal(classNames[0]);
    });
  });
  describe("both switch and merge class names", function () {
    it("should merge class name", function () {
      const sizes = ["sm", "md", "lg"];
      const unifiedClass = mergeClassNames(
        "nav",
        { name: switchClassNames(0, ...sizes), condition: true },
        { name: "selected", condition: true }
      );
      expect(unifiedClass).to.equal("nav sm selected");
    });
  });
});
