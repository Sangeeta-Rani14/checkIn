import User from "../model/user.model.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js"; // make sure this exists

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const orgId = req.orgId; 
    console.log(orgId)
    // 1️⃣ Check if email exists
    const existingUser = await User.findOne({ email ,orgId });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // 2️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3️⃣ Create user
    const user = await User.create({
      orgId,
      name,
      email,
      password: hashedPassword,
      role,
    });


    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        orgId: user.orgId,
      },
    });
  } catch (err) {
    console.error(err, "user not created");
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


export const allUser = async (req, res) => {
  const { orgId } = req.params;

  try {
    const users = await User.find({ orgId });

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};