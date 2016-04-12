const chai = require('chai');
const expect = chai.expect;
const server = require(__dirname + '/../server.js');

describe('should connect to the server', () => {
  it('should go to port 3000', (done) => {
    expect(process.stdout.to.eql('<3 Server up on 3000 :-)'));
    done();
  });
});
