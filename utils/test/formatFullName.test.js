const formatFullname = require("../formatFullname");
const expect = require("chai").expect;

describe("FormatFullname", () => {
  it("should return an error if arg is empty", () => {
    expect(formatFullname("")).to.equal("Error");
  });

  it("should return an error if arg is not a string", () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(12)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });

  it("should return an error if arg is other than <firstname> & <lastname>", () => {
    expect(formatFullname("John")).to.equal("Error");
    expect(formatFullname("John Doe test")).to.equal("Error");
  });

  it("should return first and last name with first great letter and small rest", () => {
    expect(formatFullname("john doe")).to.equal("John Doe");
    expect(formatFullname("JoHn DOE")).to.equal("John Doe");
    expect(formatFullname("joHN dOe")).to.equal("John Doe");
    expect(formatFullname("amanda doe")).to.equal("Amanda Doe");
    expect(formatFullname("AMANDA DOE")).to.equal("Amanda Doe");
    expect(formatFullname("aMaNdA dOe")).to.equal("Amanda Doe");
  });
});
