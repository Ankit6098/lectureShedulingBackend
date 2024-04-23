const mongoose = require("mongoose");

const AssignLectureSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    date: { type: String, required: true },
    lectureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
      required: true,
    },
    lectureName: { type: String, required: true },
    courseName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AssignLecture", AssignLectureSchema);
