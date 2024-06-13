import { Router } from "express";
import userRoutes from "./usersRoutes.js";
import pokemonRoutes from "./pokemonRoutes.js";
import tableroRoutes from "./tableroRoutes.js";

const routes = Router();
routes.use("/user", userRoutes);
routes.use("/pokemon", pokemonRoutes)
routes.use("/tablero", tableroRoutes)

export default routes;
