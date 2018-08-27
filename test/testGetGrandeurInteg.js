import {init, request, withTest} from "test-api-express-mongo"
import api from "../src"
import ENV from "../src/env"

describe('GET Grandeurs', function () {

    beforeEach(init(api, ENV, {}))

    it('get grandeurs', withTest({
            req: {
                url: "/api/grandeurs"
            },
            res: {
                bodypath:[
                    {path:"$.length", value:17}
                ]
            }
        }
    ))

})