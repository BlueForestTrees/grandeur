const debug = require('debug')('api:grandeur')
import {version, name} from './../package.json'

const ENV = {
    NAME:name,
    PORT: process.env.PORT || 80,
    
    REST_PATH: process.env.REST_PATH || "rest",

    NODE_ENV: process.env.NODE_ENV || null,
    VERSION: version,
    MORGAN: process.env.MORGAN || ':status :method :url :response-time ms - :res[content-length]',
}

debug(JSON.stringify({ENV}))

export default ENV