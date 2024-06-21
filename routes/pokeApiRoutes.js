import { Router } from "express";
import PokeApiControllers from "../Controllers/PokeApiControllers.js";

const pokeApiControllers = new PokeApiControllers();
const pokeApiRoutes = Router();


pokeApiRoutes.get("/", pokeApiControllers.getAllPokeApi);
pokeApiRoutes.get("/:nameOrId", pokeApiControllers.getPokeApiDetails);

export default pokeApiRoutes;