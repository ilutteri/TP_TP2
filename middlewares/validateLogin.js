import { verifyToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {
    
    const { token } = req.cookies;
    if (!token) throw new Error("token invalido");
    const { payload } = verifyToken(token);
    req.user = payload;
    console.log(payload)
    next();
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};
