const mongoose = require("mongoose");

const firstSchema = new mongoose.Schema({
  name: { type: String, uppercase: true },
  email: { type: String, uppercase: true },
  mobile: { type: Number },
  password: { type: String },
});

module.export = mongoose.model("userModel", firstSchema);
