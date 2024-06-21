import { Router } from "express";
import userRoutes from "./usersRoutes.js";
import pokemonRoutes from "./pokemonRoutes.js";
import tableroRoutes from "./tableroRoutes.js";
import pokeApiRoutes from "./pokeApiRoutes.js";

const routes = Router();
routes.use("/user", userRoutes);
routes.use("/pokemon", pokemonRoutes)
routes.use("/tablero", tableroRoutes)
routes.use("/pokeapi", pokeApiRoutes) 

export default routes;
