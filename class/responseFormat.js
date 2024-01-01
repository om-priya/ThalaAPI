class ResData {
  resData = {
    success: "",
    statusCode: "",
    license: "https://om-portfolio-fawn.vercel.app/",
    description:
      "This is response data to shaowcase whether you are protected by thala or not",
    developerName: "Sher Om Priya",
    apiVersion: "",
    errorInfo: {
      errorStatusCode: [],
      errorMessage: [],
      errorEndPoint: "",
      guideToResolve: "",
    },
    data: {
      json: {
        resMessage: "",
        imageUrl: "",
      },
    },
  };

  getJsonData() {
    return this.resData;
  }
}
module.exports = { ResData };
