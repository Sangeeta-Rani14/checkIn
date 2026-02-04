import User from "../model/user.model.js";
import organization from "../model/organization.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
 console.log(req.body)
  try {
    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2️⃣ Find user + password
  
   let user = await User.findOne({ email })

   if (!user) {
     user = await organization.findOne({ email })
    }

    console.log(user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3️⃣ Check user status
    // if (user.status !== "active") {
    //   return res.status(403).json({
    //     message: "User is not active",
    //   });
    // }

    // 4️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 5️⃣ Generate JWT
    const token = generateToken({
      userId: user._id,
      orgId: user.orgId,
      role: user.role,
    });

    res.cookie("auth", token, {
    httpOnly: true,
    secure: false,       
    sameSite: "lax",    
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

    // 6️⃣ Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        orgId: user.orgId,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
 console.log(req.body)
  try {
    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2️⃣ Find user + password
    const user = await organization.findOne({ email })


    console.log(user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    //  Check user status
    // if (user.status !== "active") {
    //   return res.status(403).json({
    //     message: "User is not active",
    //   });
    // }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 5️⃣ Generate JWT
    const token = generateToken({
      userId: user._id,
      orgId: user.orgId,
      role: user.role,
    });

    res.cookie("auth", token, {
    httpOnly: true,
    secure: true,       
    sameSite: "lax",    
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

    // 6️⃣ Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        orgId: user.orgId,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
};


// auth.controller.js
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};