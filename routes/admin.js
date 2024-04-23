const router = require("express").Router();

const {
  assignLecture,
  getAllAssignLectures,
  deleteAssignLecture,
} = require("../controllers/assignLecture_Controller");
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

const { adminLogin } = require("../controllers/admin_Controller");

// course
router.post("/createCourse", createCourse);
router.post("/updateCourse/:id", updateCourse);
router.get("/getCourse/:id", getCourse);
router.delete("/deleteCourse/:id", deleteCourse);
router.get("/getAllCourses", getAllCourses);

// lecture
router.post("/createLecture", createLecture);
router.post("/updateLecture/:id", updateLecture);
router.get("/getLecture/:id", getLecture);
router.delete("/deleteLecture/:id", deleteLecture);
router.get("/getAllLectures", getAllLectures);

// user
router.post("/createUser", createUser);
router.get("/getUser/:id", getUser);
router.get("/getAllUsers", getAllUsers);

// assign lecture
router.post("/assignLecture", assignLecture);
router.get("/getAllAssignLectures", getAllAssignLectures);
router.delete("/deleteAssignLecture/:id", deleteAssignLecture);

//admin login
router.post("/adminLogin", adminLogin);

module.exports = router;
