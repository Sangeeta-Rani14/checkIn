import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  // Get token from cookies instead of headers
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_JWT_TOKEN);
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};