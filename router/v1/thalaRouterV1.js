const express = require("express");

const thalaRouterV1 = express.Router();

const {
  thalaControllerV1Post,
} = require("../../controller/v1/thalaControllerV1");

thalaRouterV1.route("/check").get(thalaControllerV1Post);

module.exports = { thalaRouterV1 };
