const { ResData } = require("../class/responseFormat");

const verifyData = (req, res, next) => {
  req.query.name = req.query.name.replace(/\s/g, "");
  if (req.query.name && req.query.name.length > 1) {
    const nameRegex = /^[A-Za-z]+$/;

    const name = req.query.name;

    if (!name || !nameRegex.test(name)) {
      let resObject = new ResData();
      resObject.resData["success"] = false;
      resObject.resData["statusCode"] = 400;
      resObject.resData["apiVersion"] = req.baseUrl;
      resObject.resData["errorInfo"]["errorStatusCode"] = 400;
      resObject.resData["errorInfo"]["errorMessage"] =
        "Check your name It's not normal";
      resObject.resData["errorInfo"]["errorEndPoint"] = req.url;
      resObject.resData["errorInfo"]["guideToResolve"] =
        "check your name with aadhar card";
      return res.status(400).json(resObject.getJsonData());
    }
    next();
  } else {
    let resObject = new ResData();
    resObject.resData["success"] = false;
    resObject.resData["statusCode"] = 400;
    resObject.resData["apiVersion"] = req.baseUrl;
    resObject.resData["errorInfo"]["errorStatusCode"] = 400;
    resObject.resData["errorInfo"]["errorMessage"] = "Name is not there";
    resObject.resData["errorInfo"]["errorEndPoint"] = req.url;
    resObject.resData["errorInfo"]["guideToResolve"] =
      "Write your name for thala";
    return res.status(400).json(resObject.getJsonData());
  }
};

module.exports = { verifyData };
