const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../index")

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

const request = chai.request(app)

describe("CINEMAS API", () => {
  it('Route: /, gives response', (done) => {
    request
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object').with.property('result')
        done()
      })
  })
  it('Route:/ozone, gives expected response', (done) => {
    request
      .get('/ozone')
      .end((err, res) => {
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})