const express = require("express");
const assetRoutes = require("./routes/asset-routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/assets", assetRoutes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
