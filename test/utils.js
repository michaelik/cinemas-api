const chai = require("chai")
const date = require("../utils").date
const expect = chai.expect

describe("UTILITY FUNCTIONS", () => {
  it.only("Date parser works", () => {
    let parsedDate = date("Fri - Thu", "12:00PM").interval()
    console.log(parsedDate)
    expect(parsedDate).to.be.an("array")
    expect(parsedDate).not.contain({day: "Fri"})
    expect(parsedDate).to.have.lengthOf.of.at.least(3)
  })
})