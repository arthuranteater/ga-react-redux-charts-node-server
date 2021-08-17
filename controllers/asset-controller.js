const csvFilePath = "./db/ex-data.csv";
const csv = require("csvtojson");

module.exports = {
  findAll: function (req, res) {
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        res.json(jsonObj);
      })
      .catch((err) => res.status(422).json(err));
  },
};
