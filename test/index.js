const chai = require("chai");
const expect = chai.expect;

const mergeClasses = require("../index");

describe("merging css clasnames", function () {
  it("should merge classes", function () {
    const unifiedClass = mergeClasses(
      { class: "button", condition: true },
      { class: "selected", condition: true }
    );
    expect(unifiedClass).to.equal("button selected");
  });
  it("should merge classes", function () {
    const unifiedClass = mergeClasses(
      { class: "button", condition: true },
      { class: "selected", condition: false },
      { class: "hover", condition: true }
    );
    expect(unifiedClass).to.equal("button hover");
  });
  it("should merge classes", function () {
    const unifiedClass = mergeClasses(
      { class: "nav", condition: true },
      { class: "xl", condition: true },
      { class: "selected", condition: true }
    );
    expect(unifiedClass).to.equal("nav xl selected");
  });
});
