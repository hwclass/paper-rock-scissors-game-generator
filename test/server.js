process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect;

chai.use(chaiHttp)

describe('/GET data', () => {
  it('should return data in JSON format', (done) => {
    chai.request(server)
      .get('/data')
      .end((err, response) => {
        expect(err).to.be.null
        expect(response).to.have.status(200)
        console.log(response.body)
        expect(response.body).to.be.a('array')
        done()
      })
  }) 
})