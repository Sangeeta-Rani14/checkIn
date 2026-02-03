import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.auth;

  if (!token) return res.sendStatus(401);

   try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch {
    res.sendStatus(401);
  }

};
