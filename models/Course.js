const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String, required: true },
    // image: { type: String, required: true },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", coursesSchema);
