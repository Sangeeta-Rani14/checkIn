import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./config/db.js";
import orgRoutes from "./routes/organization.route.js"
import userRoute from './routes/user.route.js'
import authRoute from  "./routes/auth.routes.js"
import visitorRoute from "./routes/visitor.route.js"
dotenv.config();
const app =express();
connectDB();

app.use(cors());
app.use(express.json());
// route

app.use('/api/organization',orgRoutes);
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/visitor',visitorRoute);
app.listen(5000,()=>{
    console.log("Bakend is working");
})