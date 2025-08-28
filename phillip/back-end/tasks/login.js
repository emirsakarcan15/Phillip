const express = require("express")
const router = express.Router()
const functions = require("../controllers/functions")


router.get("/", functions.getLogin)

router.post("/user", functions.createUser)

router.post("/ex-user", functions.existingUser)




module.exports = router;