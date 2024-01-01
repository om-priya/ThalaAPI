const express = require("express");

const thalaRouterV1 = express.Router();

const { thalaControllerV1 } = require("../../controller/v1/thalaControllerV1");
const { verifyData } = require("../../middlewares/checkIncomingData");

thalaRouterV1.route("/check").get(verifyData, thalaControllerV1);

module.exports = { thalaRouterV1 };
