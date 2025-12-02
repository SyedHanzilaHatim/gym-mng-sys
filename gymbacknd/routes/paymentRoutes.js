const router = require("express").Router();
const paymentController = require("../controllers/paymentController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post("/pay", authMiddleware, paymentController.pay);
router.get("/my", authMiddleware, paymentController.myPayments);
router.get("/", authMiddleware, roleMiddleware(["admin"]), paymentController.getAll);
router.put("/:id/verify", authMiddleware, roleMiddleware(["admin"]), paymentController.verify);

module.exports = router;
