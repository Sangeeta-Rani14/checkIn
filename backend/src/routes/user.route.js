
import express from "express"
import { allUser, createUser } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/',protect,createUser);
router.get('/all',protect,allUser)

export default router;