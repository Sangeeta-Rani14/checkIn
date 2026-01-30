import express from "express"
import {createOrg} from "../controller/orgController.js"
const router =express.Router();

router.post('/',createOrg);

export default router;