const thalaControllerV1 = (req, res) => {
  console.log("Thala API V1 Called");
  res.send("V1 Thala API");
};

module.exports = { thalaControllerV1 };
