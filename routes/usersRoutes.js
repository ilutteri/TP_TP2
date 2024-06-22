import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateRol } from "../middlewares/validateRol.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post("/", userControllers.createUser);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/logout", userControllers.logoutUser);

userRoutes.use(validateLogin);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.get("/me", validateLogin, userControllers.me);
userRoutes.get("/", validateRol, userControllers.getAllUser);

userRoutes.put("/:id", userControllers.updateUser);

userRoutes.delete("/:id", validateRol, userControllers.deleteUser);






export default userRoutes;