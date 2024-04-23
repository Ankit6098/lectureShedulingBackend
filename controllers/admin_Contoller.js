const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

// assign
const LectureAssign = require("../models/AssignLecture");
const User = require("../models/User");

// Function to assign a lecture to a user
exports.assignLecture = async (req, res) => {
  try {
    const { username, date, lectureId } = req.body;
    console.log(req.body);

    // Check if the user already has a lecture assigned on the given date
    const existingAssignment = await LectureAssign.findOne({ username, date });

    if (existingAssignment) {
      return res
        .status(400)
        .json({ message: "User already has a lecture assigned on this date" });
    }

    const lecture = await Lecture.findById(lectureId);
    // Create the new assignment
    const assignLecture = await LectureAssign.create({
      username: username,
      date: date,
      lectureId: lectureId,
      lectureName: lecture.name,
    });
    if (assignLecture) {
      return res.status(201).json({
        message: "Lecture assigned successfully",
        assignLecture: assignLecture,
      });
    }

    return res.status(201).json({
      message: "Lecture not assigned successfully",
      assignLecture: assignLecture,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
