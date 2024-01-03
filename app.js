const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const cors = require("cors");

const { thalaRouterV1 } = require("./router/v1/thalaRouterV1");
const { thalaRouterV2 } = require("./router/v2/thalaRouterV2");
const { ResData } = require("./class/responseFormat");
const { optionsV1 } = require("./apiDocsOptions/v1/optionsV1");
// const { optionsV2 } = require("./apiDocsOptions/v2/optionsV2");

app.use(cors());
// Doc API Path
const spacsv1 = swaggerjsdoc(optionsV1);
app.use("/api/v1/api-docs/", swaggerui.serve, swaggerui.setup(spacsv1));
// const spacsv2 = swaggerjsdoc(optionsV2);
// app.use("/api/v2/api-docs/", swaggerui.serve, swaggerui.setup(spacsv2));

// Different Api versions
app.use("/api/v1", thalaRouterV1);
app.use("/api/v2", thalaRouterV2);

// for not implemented path
app.use((req, res) => {
  let resObject = new ResData();
  resObject.resData["success"] = false;
  resObject.resData["statusCode"] = 404;
  resObject.resData["apiVersion"] = req.baseUrl;
  resObject.resData["errorInfo"]["errorStatusCode"] = 404;
  resObject.resData["errorInfo"]["errorMessage"] = "No Such Url is there";
  resObject.resData["errorInfo"]["errorEndPoint"] = req.url;
  resObject.resData["errorInfo"]["guideToResolve"] =
    "Check Your Url with the Docs";
  return res.status(404).json(resObject.getJsonData());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// for vercel deployment
// Export the Express API
module.exports = app;
