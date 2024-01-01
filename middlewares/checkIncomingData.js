const { resData } = require("../constants/responseFormat");

const verifyData = (req, res, next) => {
  if (req.query.name && req.query.name.length > 1) {
    const nameRegex = /^[A-Za-z]+$/;

    const name = req.query.name;

    if (!name || !nameRegex.test(name)) {
      resData["success"] = false;
      resData["statusCode"] = 400;
      resData["apiVersion"] = req.baseUrl;
      resData["errorInfo"]["errorStatusCode"] = 400;
      resData["errorInfo"]["errorMessage"] = "Check your name It's not normal";
      resData["errorInfo"]["errorEndPoint"] = req.url;
      resData["errorInfo"]["guideToResolve"] =
        "check your name with aadhar card";
      return res.status(400).json(resData);
    }
    next();
  } else {
    resData["success"] = false;
    resData["statusCode"] = 400;
    resData["apiVersion"] = req.baseUrl;
    resData["errorInfo"]["errorStatusCode"] = 400;
    resData["errorInfo"]["errorMessage"] = "Name is not there";
    resData["errorInfo"]["errorEndPoint"] = req.url;
    resData["errorInfo"]["guideToResolve"] = "Write your name for thala";
    return res.status(400).json(resData);
  }
};

module.exports = { verifyData };
