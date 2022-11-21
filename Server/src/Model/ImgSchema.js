const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
  },
  {
    collection: "img",
  }
);

const imgModel = mongoose.model("imgModel", imgSchema);
module.exports = imgModel;
