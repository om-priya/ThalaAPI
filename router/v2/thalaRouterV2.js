const express = require("express");

const thalaRouterV2 = express.Router();

const {
  thalaControllerV2Post,
} = require("../../controller/v2/thalaControllerV2");

thalaRouterV2.route("/check").get(thalaControllerV2Post);

module.exports = { thalaRouterV2 };
