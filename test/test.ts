import * as assert from "assert"
import * as handler from "../src/handler"
import * as constants from "../src/constants"

function noop(): void { }

describe("handler", function () {
  describe(".getPort()", function () {
    before(function () {
      console.warn = noop
    })
    it(`should return ${constants.defaultPort} when args are not specified`, function () {
      assert.equal(handler.getPort(), constants.defaultPort);
    })
    it(`should return port from arg when specified`, function () {
      const testPort = 3001
      process.argv = ["", "", `port=${testPort}`]
      assert.equal(handler.getPort(), testPort);
    })
    it(`should return port from arg when specified`, function () {
      const testPort = 3001
      process.argv = ["", "", `${testPort}`]
      assert.equal(handler.getPort(), constants.defaultPort);
    })
  })
})
