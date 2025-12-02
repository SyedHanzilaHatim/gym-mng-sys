const router = require("express").Router();
const planController = require("../controllers/planController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.get("/", planController.getPlans);
router.get("/:id", planController.getPlan);
router.post("/", authMiddleware, roleMiddleware(["admin"]), planController.createPlan);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), planController.updatePlan);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), planController.deletePlan);

module.exports = router;
