/**
 * @openapi
 * paths:
 *   /check:
 *     get:
 *       summary: Check if the app is running
 *       tags:
 *         - Check
 *       description: Returns a message indicating that the app is running.
 *       responses:
 *         '200':
 *           description: App is running
 */
const express = require("express");

const thalaRouterV2 = express.Router();

const { thalaControllerV2 } = require("../../controller/v2/thalaControllerV2");
const { verifyData } = require("../../middlewares/checkIncomingData");

thalaRouterV2.route("/check").get(verifyData, thalaControllerV2);

module.exports = { thalaRouterV2 };
