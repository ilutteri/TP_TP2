import { verifyToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {
    console.log(req.cookies.token)
    const { token } = req.cookies;
    if (!token) throw new Error("token invalido");
    const { payload } = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};
