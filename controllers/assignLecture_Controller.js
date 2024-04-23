const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

// assign
const LectureAssign = require("../models/AssignLecture");
const User = require("../models/User");
const AssignLecture = require("../models/AssignLecture");

// Function to assign a lecture to a user
exports.assignLecture = async (req, res) => {
  try {
    const { userName, date, lectureId } = req.body;

    // Check if the user already has a lecture assigned on the given date
    const existingAssignment = await LectureAssign.findOne({ userName, date });

    if (existingAssignment) {
      return res
        .status(400)
        .json({ message: "User already has a lecture assigned on this date" });
    }

    // Fetch the lecture details
    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    // Create the new assignment
    const assignLecture = await LectureAssign.create({
      userName: userName,
      date: date,
      lectureId: lectureId,
      lectureName: lecture.name,
      courseName: lecture.courseName,
    });

    return res.status(200).json({
      message: "Lecture assigned successfully",
      assignLecture: assignLecture,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// get all assignLectures
module.exports.getAllAssignLectures = async (req, res) => {
  try {
    const assignLecture = await AssignLecture.find({});
    if (assignLecture) {
      return res.status(200).json({
        message: "Lecture assigned successfully",
        assignLecture: assignLecture,
      });
    }
    return res.status(400).json({ message: "Assign Lectures not found" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//delete
module.exports.deleteAssignLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const assignLecture = await AssignLecture.findByIdAndDelete(id);
    if (assignLecture) {
      return res.status(200).json({
        message: "Lecture assigned successfully",
        assignLecture: assignLecture,
      });
    }
    return res.status(400).json({ message: "Assign Lectures not found" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
