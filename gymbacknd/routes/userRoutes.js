const router = require("express").Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.get("/profile", authMiddleware, userController.getProfile);
router.put("/profile", authMiddleware, userController.updateProfile);
router.get("/my-plan", authMiddleware, userController.myPlan);
router.get("/my-payments", authMiddleware, userController.myPayments);

module.exports = router;
