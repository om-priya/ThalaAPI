const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { thalaRouterV1 } = require("./router/v1/thalaRouterV1");
const { thalaRouterV2 } = require("./router/v2/thalaRouterV2");
const { ResData } = require("./class/responseFormat");

app.use("/api/v1", thalaRouterV1);
app.use("/api/v2", thalaRouterV2);

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