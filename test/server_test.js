const chai = require('chai');
const expect = chai.expect;
const server = require(__dirname + '/../server.js');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

describe('should connect to the server', () => {
  before(() => {
    server.listen(3000);
  });
  after(() => {
    server.close();
  });

  it('should go to port 3000', (done) => {
    chai.request('http://localhost:3000')
    .get('/')
    .end((err, response) => {
      console.log(res);
      expect((res).to.have.status(200));
      done();
    });
  });
});
