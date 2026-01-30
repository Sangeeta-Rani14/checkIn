import Organization from "../model/organization.model.js";

// create 
export const createOrg = async(req,res)=>{
 try{
    const org = await Organization.create(req.body);
   res.status(201).json({
      success: true,
      message: "Organization created",
      data: org,
    });

 }
 catch(err){
    console.log(err,"Error in Creating Organization")
     res.status(400).json({
      success: false,
      message: err.message,
    });
 }
}

// get all

export const getOrgs = async (req, res) => {
  try {
    const orgs = await Organization.find();
    res.status(200).json(orgs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};