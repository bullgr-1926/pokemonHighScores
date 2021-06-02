const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", User);
