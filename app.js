const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { thalaRouterV1 } = require("./router/v1/thalaRouterV1");
const { thalaRouterV2 } = require("./router/v2/thalaRouterV2");
const { resData } = require("./constants/responseFormat");

app.get("/", (req, res) => {
  res.send("I am Live");
});

app.use("/api/v1", thalaRouterV1);
app.use("/api/v2", thalaRouterV2);

app.use((req, res) => {
  resData["success"] = false;
  resData["statusCode"] = 404;
  resData["apiVersion"] = req.baseUrl;
  resData["errorInfo"]["errorStatusCode"] = 404;
  resData["errorInfo"]["errorMessage"] = "No Such Url is there";
  resData["errorInfo"]["errorEndPoint"] = req.url;
  resData["errorInfo"]["guideToResolve"] = "Check Your Url with the Docs";
  return res.status(404).json(resData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
