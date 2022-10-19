const express = require("express")
const { getItAction } = require("../controllers/DtmController")

const router = express.Router()

router.post("/itaction", getItAction)

module.exports = router;