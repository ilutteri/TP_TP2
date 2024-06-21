import { Router } from "express";
import PokemonControllers from "../Controllers/PokemonControllers.js";

const pokemonControllers = new PokemonControllers();
const pokemonRoutes = Router();

pokemonRoutes.get("/", pokemonControllers.getAllPokemon);
pokemonRoutes.post("/", pokemonControllers.createPokemon);
pokemonRoutes.get("/tablero/:tableroId", pokemonControllers.getPokemonByTableroId); 
pokemonRoutes.get("/pokemon/:nroPokemon", pokemonControllers.getPokemonByNroPokemon);


pokemonRoutes.put("/:id", pokemonControllers.updatePokemon);
pokemonRoutes.delete("/:id", pokemonControllers.deletePokemon);

export default pokemonRoutes;