const router = require("express").Router();
const csvFilePath = "./ex-data.csv";
const csv = require("csvtojson");
const assetController = require("../controllers/asset-controller");

router.route("/").get(assetController.findAll);

// Async / await usage
async function logres() {
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);
}

module.exports = router;
