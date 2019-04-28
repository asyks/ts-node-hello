import * as assert from "assert";
import * as hello from "./hello";
import * as constants from "./constants";

describe("hello", function testGetPort() {
  describe(".getPort()", function testDefault() {
    it(`should return ${constants.defaultPort} when args are not specified`, function() {
      assert.equal(hello.getPort(), constants.defaultPort);
    });
  });
  describe(".getPort()", function testWithValidArg() {
    it(`should return port from arg when specified`, function() {
      var testPort: number = 3001
      process.argv = ["","",`port=${testPort}`]
      assert.equal(hello.getPort(), testPort);
    });
  });
  describe(".getPort()", function testWithInvalidArg() {
    it(`should return port from arg when specified`, function() {
      var testPort: number = 3001
      process.argv = ["","",`${testPort}`]
      assert.equal(hello.getPort(), constants.defaultPort);
    });
  });
});
