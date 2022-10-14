const express = require("express");
const { gutJust, getmet } = require('../controllers/ResultController')

const router = express.Router();

router.post("/getjust", gutJust);
router.get("/", getmet)



module.exports = router;