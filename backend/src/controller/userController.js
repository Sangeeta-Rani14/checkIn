import User from "../model/user.model.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js"; // make sure this exists

export const createUser = async (req, res) => {
  const { orgId, name, email, password, role } = req.body;

  try {
    // 1️⃣ Check if email exists
    const existingUser = await User.findOne({ email });
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

    // 4️⃣ Generate JWT
    const token = generateToken({
      userId: user._id,
      orgId: user.orgId,
      role: user.role,
    });

    // 5️⃣ Return response
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
      token,
    });
  } catch (err) {
    console.error(err, "user not created");
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
