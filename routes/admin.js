const router = require("express").Router();

const {
  createCourse,
  updateCourse,
  getCourse,
  deleteCourse,
  getAllCourses,
} = require("../controllers/admin_Controller");

router.post("/createCourse", createCourse);
router.post("/updateCourse/:id", updateCourse);
router.get("/getCourse/:id", getCourse);
router.delete("/deleteCourse/:id", deleteCourse);
router.get("/getAllCourses", getAllCourses);

module.exports = router;
