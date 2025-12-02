const router = require("express").Router();
const attendanceController = require("../controllers/attendanceController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post("/checkin", authMiddleware, attendanceController.checkin);
router.get("/my", authMiddleware, attendanceController.my);
router.get("/", authMiddleware, roleMiddleware(["admin"]), attendanceController.all);

module.exports = router;
