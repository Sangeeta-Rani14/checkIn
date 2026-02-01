
import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { loginUser } from "../controller/authController.js";
const router = express.Router();

router.post(
  "/login",
  // protect,
  // authorize("admin", "super_admin"),
  loginUser
);
router.post(
  "/user-only",
  protect,
  authorize("employee"),
  loginUser
);

export default router;
