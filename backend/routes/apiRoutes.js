const express = require('express');
const router = express.Router();

console.log("api routes")

router.use("/home",require('../apis/providers.api'));
router.use("/details",require('../apis/providerdetails.api'));


module.exports = router;