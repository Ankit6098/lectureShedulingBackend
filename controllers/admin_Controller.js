const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

// create course
module.exports.createCourse = async (req, res) => {
  try {
    const { name, level, description } = req.body;
    const course = await Course.create({
      name: name,
      level: level,
      description: description,
    });
    if (course) {
      return res.status(200).json({
        message: "Course Created!",
        course: course,
      });
    }
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not created!",
      error: error,
    });
  }
};

// update course
module.exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { name, level, description } = req.body;
    console.log(req.body);
    const course = await Course.findByIdAndUpdate(
      id,
      { name, level, description },
      { new: true }
    );
    if (course) {
      return res.status(200).json({
        message: "Course Updated!",
        course: course,
      });
    }
    return res.status(404).json({
      message: "Course not found",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not updated!",
      error: error,
    });
  }
};

// get by id
module.exports.getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (course) {
      return res.status(200).json({
        message: "Course found!",
        course: course,
      });
    }
    return res.status(404).json({
      message: "Course not found!",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not found!",
      error: error,
    });
  }
};

// delete course
module.exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const course = await Course.findByIdAndDelete(id);
    if (course) {
      return res.status(200).json({
        message: "Course deleted!",
        course: course,
      });
    }
    return res.status(404).json({
      message: "Course not deleted!",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not deleted!",
      error: error,
    });
  }
};

// get all courses
module.exports.getAllCourses = async (req, res) => {
  try {
    const course = await Course.find({});
    if (course) {
      return res.status(200).json({
        message: "Course found!",
        course: course,
      });
    }
    return res.status(404).json({
      message: "Course not found!",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not found!",
      error: error,
    });
  }
};
