import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
   
  console.log('All cookies:', req.cookies); 
  const token = req.cookies.auth;

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN);

    req.userId = payload.userId;
    req.orgId = payload.orgId;   
    req.userRole = payload.role;  

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};