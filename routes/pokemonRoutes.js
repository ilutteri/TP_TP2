import { Router } from "express";
import PokemonControllers from "../Controllers/PokemonControllers.js";

const pokemonControllers = new PokemonControllers();
const pokemonRoutes = Router();

pokemonRoutes.get("/", pokemonControllers.getAllPokemon);
pokemonRoutes.get("/:id", pokemonControllers.getPokemonById);
pokemonRoutes.get("/pokemon/:nroPokemon", pokemonControllers.getPokemonByNroPokemon);
pokemonRoutes.get("/tablero/:tableroId", pokemonControllers.getPokemonByTableroId);
pokemonRoutes.post("/", pokemonControllers.createPokemon);
pokemonRoutes.put("/:id", pokemonControllers.updatePokemon);
pokemonRoutes.delete("/:id", pokemonControllers.deletePokemon);

export default pokemonRoutes;