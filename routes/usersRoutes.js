import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateRol } from "../middlewares/validateRol.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post("/", userControllers.createUser);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/logout", userControllers.logoutUser);


userRoutes.get("/all/:id", validateRol, userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getUserById);


userRoutes.put("/admin/:id", userControllers.setAdmin);

userRoutes.delete("/:id", validateRol, userControllers.deleteUser);

userRoutes.use(validateLogin);
userRoutes.get("/me", validateLogin, userControllers.me);


export default userRoutes;