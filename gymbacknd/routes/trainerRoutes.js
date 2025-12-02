const router = require("express").Router();
const trainerController = require("../controllers/trainerController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.get("/", trainerController.getTrainers);
router.get("/:id", trainerController.getTrainer);
router.post("/", authMiddleware, roleMiddleware(["admin"]), trainerController.createTrainer);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), trainerController.updateTrainer);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), trainerController.deleteTrainer);

module.exports = router;
