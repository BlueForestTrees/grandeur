import {Router} from "express-blueforest"
import {run} from 'express-blueforest'
import {loadGrandeurs} from "../grandeur/grandeurService"

const router = Router()
const grandeurs = loadGrandeurs()

router.get('/api/grandeur',run(()=>grandeurs))

module.exports = router