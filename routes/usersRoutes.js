import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import  { validateRol } from "../middlewares/validateRol.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post("/login", userControllers.login);
userRoutes.post("/", userControllers.createUser);
userRoutes.post("/logout", validateLogin, userControllers.logoutUser);
userRoutes.get("/me", validateLogin, userControllers.me);
userRoutes.use(validateLogin);

userRoutes.get("/", validateRol ,userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", validateRol,userControllers.deleteUser);


export default userRoutes;
