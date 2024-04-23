const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

// create lecture
module.exports.createLecture = async (req, res) => {
  try {
    const { id, name, description } = req.body;

    // Check if the course exists
    const course = await Course.findById(id);

    if (!course) {
      return res.status(400).json({
        message: "Course not found!",
      });
    }

    // Find the lecture by name
    const existingLecture = await Lecture.findOne({ name: name });

    if (existingLecture) {
      // Check if the found lecture is associated with this course
      const lectureBelongsToCourse = course.lectures.includes(
        existingLecture._id
      );
      if (lectureBelongsToCourse) {
        return res.status(400).json({
          message: "Lecture with this name already exists for this course!",
        });
      }
    }

    // If no lecture with the given name exists, create a new lecture
    const lecture = await Lecture.create({
      name: name,
      description: description,
      courseName: course.name,
      courseId: course._id,
    });

    if (!lecture) {
      return res.status(402).json({
        message: "Lecture not created!",
      });
    }

    // Add the newly created lecture to the course
    course.lectures.push(lecture._id);
    await course.save();

    return res.status(200).json({
      message: "Lecture Created!",
      lecture: lecture,
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not updated!",
      error: error,
    });
  }
};

module.exports.updateLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const lecture = await Lecture.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (lecture) {
      return res.status(200).json({
        message: "Lecture Updated!",
        lecture: lecture,
      });
    }
    return res.status(404).json({
      message: "Lecture not found",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Lecture not updated!",
      error: error,
    });
  }
};

// get lecture by id
module.exports.getLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const lecture = await Lecture.findById(id);
    if (lecture) {
      return res.status(200).json({
        message: "Lecture Found!",
        lecture: lecture,
      });
    }
    return res.status(404).json({
      message: "Lecture not found",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Lecture not found!",
      error: error,
    });
  }
};

// delete lecture
module.exports.deleteLecture = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the lecture by its ID
    const lecture = await Lecture.findById(id);

    // If lecture doesn't exist, return error
    if (!lecture) {
      return res.status(404).json({
        message: "Lecture not found!",
      });
    }

    // Find the associated course using lecture's courseId
    const course = await Course.findById(lecture.courseId);

    // If course doesn't exist, return error
    if (!course) {
      return res.status(404).json({
        message: "Associated course not found!",
      });
    }

    // Filter out the lecture ID from the course's lectures array
    course.lectures = course.lectures.filter(
      (lectureId) => lectureId.toString() !== id
    );

    // Save the updated course
    await course.save();

    // Delete the lecture
    await Lecture.findByIdAndDelete(id);

    // Send success response
    return res.status(200).json({
      message: "Lecture deleted successfully!",
    });
  } catch (error) {
    // If any error occurs, send error response
    return res.status(500).json({
      message: "Error occurred while deleting lecture.",
      error: error.message,
    });
  }
};
