const mongoose = require("mongoose");

const lectureSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lecture", lectureSchema);
