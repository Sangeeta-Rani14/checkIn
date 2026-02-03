
import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { loginUser } from "../controller/authController.js";
const router = express.Router();
const app= express();
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


app.post("/logout", (req, res) => {
  res.clearCookie("auth");
  res.sendStatus(200);
});

export default router;
