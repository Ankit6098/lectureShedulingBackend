const mongoose = require("mongoose");

const AssignLectureSchema = mongoose.Schema({
  username: { type: String, required: true },
  date: { type: String, required: true },
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture",
    required: true,
  },
  lectureName: { type: String, required: true },
});

module.exports = mongoose.model("AssignLecture", AssignLectureSchema);
