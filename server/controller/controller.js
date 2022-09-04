const model = require("../models/model");
//get categories

function create_Categories(req, res) {
  const Create = new model.Categories({
    type: "Investment",
    color: "#FCBE44",
  });

  Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating Categories ${err}` });
  });
}

module.exports = {
  create_Categories,
};
