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

const thalaRouterV1 = express.Router();

const { thalaControllerV1 } = require("../../controller/v1/thalaControllerV1");
const { verifyData } = require("../../middlewares/checkIncomingData");

thalaRouterV1.route("/check").get(verifyData, thalaControllerV1);

module.exports = { thalaRouterV1 };
