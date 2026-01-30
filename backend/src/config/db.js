
import mongoose from 'mongoose';
 const connectDB =async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("Connected with db")
    }
    catch(err){
        console.log(err,"error in connection")
        process.exit(1);
    }
}

export default connectDB;