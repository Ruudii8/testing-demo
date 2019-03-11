import {expect} from 'chai'
import { app } from '../../src/ui/express'
import { config } from '../../src/config'
var chai = require('chai')
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe("Server", () => {
    it("can request config", function() {
        return chai.request(app)
        .get('/config')
        .then( (res: any) => {
            expect(res.text).to.equal(JSON.stringify(config))
        })
    })
})