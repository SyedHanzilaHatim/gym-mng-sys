const router = require("express").Router();
const subscriptionController = require("../controllers/subscriptionController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post("/buy", authMiddleware, subscriptionController.buy);
router.get("/my", authMiddleware, subscriptionController.mySubs);
router.get("/:id", authMiddleware, subscriptionController.getOne);
router.get("/", authMiddleware, roleMiddleware(["admin"]), subscriptionController.getAll);
router.put("/:id/cancel", authMiddleware, roleMiddleware(["admin"]), subscriptionController.cancel);

module.exports = router;
