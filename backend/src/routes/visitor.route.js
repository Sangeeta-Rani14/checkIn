import express from "express"
import {visitor}  from "../controller/visitorController.js"
 const routes = express.Router();

 routes.post('/',visitor)

 export default routes