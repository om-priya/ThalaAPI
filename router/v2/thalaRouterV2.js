const express = require("express");

const thalaRouterV2 = express.Router();

const { thalaControllerV2 } = require("../../controller/v2/thalaControllerV2");
const { verifyData } = require("../../middlewares/checkIncomingData");

thalaRouterV2.route("/check").get(verifyData, thalaControllerV2);

module.exports = { thalaRouterV2 };
