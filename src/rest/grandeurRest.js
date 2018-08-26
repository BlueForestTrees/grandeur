import {getGrandeurs} from "unit-manip"

import {Router} from "express-blueforest"
const router = Router()
import {run} from 'express-blueforest'
import {loadGrandeurs} from "./grandeurService"

const grandeurs = loadGrandeurs()

router.get('/api/grandeurs',run(()=>grandeurs))

module.exports = router