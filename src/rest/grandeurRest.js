import {Router} from "express-blueforest"
import {run} from 'express-blueforest'
import {loadGrandeurs} from "../grandeur/grandeurService"

const router = Router()
const grandeurs = loadGrandeurs()

router.get('/api/grandeurs',run(()=>grandeurs))

module.exports = router