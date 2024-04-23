const router = require("express").Router();

const {
  createCourse,
  updateCourse,
  getCourse,
  deleteCourse,
  getAllCourses,
} = require("../controllers/course_Controller");

const {
  createLecture,
  updateLecture,
  getLecture,
  deleteLecture,
} = require("../controllers/lecture_Controller");

router.post("/createCourse", createCourse);
router.post("/updateCourse/:id", updateCourse);
router.get("/getCourse/:id", getCourse);
router.delete("/deleteCourse/:id", deleteCourse);
router.get("/getAllCourses", getAllCourses);

router.post("/createLecture", createLecture);
router.post("/updateLecture/:id", updateLecture);
router.get("/getLecture/:id", getLecture);
router.delete("/deleteLecture/:id", deleteLecture);

module.exports = router;
