const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;
const server = require(__dirname + '/../server.js');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

describe('should connect to the server', () => {
  var files;
  var newFiles;
  before(() => {
    server.listen(3000);
    files = fs.readdirSync(__dirname + '/../newfiles/', (err, files) => {
      if (err) throw err;
    });
    console.log('files.length ' + files.length);
    files = files.length + 1;
    console.log(files);
  });
  after(() => {
    server.close();
  });

  it('the number of file should increase', (done) => {
    chai.request('http://localhost:3000')
    .get('/')
    .end(() => {
      newFiles = fs.readdirSync(__dirname + '/../newfiles/', (err, files) => {
        if (err) throw err;
      });
      console.log('newFiles ' + newFiles);
      newFiles = newFiles.length;
      expect(newFiles.to.eql(files));
      done();
    });
  });
});
