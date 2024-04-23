const router = require("express").Router();

const { assignLecture } = require("../controllers/admin_Contoller");
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
  getAllLectures,
} = require("../controllers/lecture_Controller");

const {
  createUser,
  getUser,
  getAllUsers,
} = require("../controllers/user_Controller");

router.post("/createCourse", createCourse);
router.post("/updateCourse/:id", updateCourse);
router.get("/getCourse/:id", getCourse);
router.delete("/deleteCourse/:id", deleteCourse);
router.get("/getAllCourses", getAllCourses);

router.post("/createLecture", createLecture);
router.post("/updateLecture/:id", updateLecture);
router.get("/getLecture/:id", getLecture);
router.delete("/deleteLecture/:id", deleteLecture);
router.get("/getAllLectures", getAllLectures);

router.post("/createUser", createUser);
router.get("/getUser/:id", getUser);
router.get("/getAllUsers", getAllUsers);

router.post('/assignLecture', assignLecture)
module.exports = router;
