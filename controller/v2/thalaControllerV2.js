const { ResData } = require("../../class/responseFormat");

const thalaControllerV2 = (req, res) => {
  let sum = 0;

  // Loop through each character in the string
  for (let i = 0; i < req.query.name.length; i++) {
    const charValue = req.query.name.charCodeAt(i) - "A".charCodeAt(0) + 1;
    sum += charValue;
  }

  let message, imgLink;
  if (sum % 7 == 0) {
    message = "The Message is Clear You are protected by thala";
    imgLink =
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGhzZjVyYmxvbm1obXZhMjI2emNqdDZvbDBicDZzeHdsZGZ2bnBucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2pVG9td6mpC2nakk8X/giphy.gif";
  } else if (sum % 5 == 0) {
    message = "Single player can never won a world cup You are a team memeber";
    imgLink =
      "https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-99-16806717483x2.jpg?impolicy=website&width=510&height=356";
  } else {
    message = "Script Likhna Abhi Baaki Hai";
    imgLink =
      "https://knowyourmeme.com/memes/jay-shahs-rude-hand-gesture/photos";
  }

  let resObject = new ResData();
  resObject.resData["success"] = true;
  resObject.resData["statusCode"] = 200;
  resObject.resData["apiVersion"] = req.baseUrl;
  resObject.resData["data"]["json"]["resMessage"] = message;
  resObject.resData["data"]["json"]["imageUrl"] = imgLink;

  return res.status(200).json(resObject.getJsonData());
};

module.exports = { thalaControllerV2 };
