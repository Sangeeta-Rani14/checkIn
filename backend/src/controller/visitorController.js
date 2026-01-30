import Visitor from "../model/vistiorModel.js";

export const visitor =async(req,res)=>{
    try{
     const vistor = await Visitor.create(req.body);
     res.status(200).json({
        data:vistor,
        message:"visitor booked"
     })
    }catch(err){
        console.log(err,"visitor not created")
      res.status(500).json({
        message:err,
     })
    }
}