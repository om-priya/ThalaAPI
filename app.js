const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { thalaRouterV1 } = require("./router/v1/thalaRouterV1");
const { thalaRouterV2 } = require("./router/v2/thalaRouterV2");

app.get("/", (req, res) => {
  res.send("I am Live");
});

app.use("/api/v1", thalaRouterV1);
app.use("/api/v2", thalaRouterV2);

app.use((req, res) => {
  return res.status(404).json({ error: "Not Found" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
