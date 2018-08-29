import {initApi, withTest} from "test-api-express-mongo"
import api from "../src"

describe('GET Grandeurs', function () {

    beforeEach(initApi(api))

    it('get grandeurs', withTest({
            req: {
                url: "/api/grandeur"
            },
            res: {
                bodypath:[
                    {path:"$.length", value:17}
                ]
            }
        }
    ))

})