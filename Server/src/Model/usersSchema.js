const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      username: { type: String, unique: true },
      password: { type: String, required: true},
      phoneNumber: { type: Number, required: true},
      email: { type: String, required: true}
    },
    {
      collection: "Users",
    }
  );

  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel