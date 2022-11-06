const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseID: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("Excercise", exerciseSchema);
module.exports = admin;
