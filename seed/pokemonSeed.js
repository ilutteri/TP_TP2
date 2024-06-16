import {Pokemon} from "../Models/models.js"


export const pokemonSeed = async ()=> ([
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 1}),
    await Pokemon.create({nroPokemon: 25, apodo: "pikachu" , nivel: 1, tableroId: 1}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 2}),
    await Pokemon.create({nroPokemon: 4, apodo: "charmander" , nivel: 1, tableroId: 2}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 3}),
    await Pokemon.create({nroPokemon: 7, apodo: "squirtle" , nivel: 1, tableroId: 3}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 4}),
    await Pokemon.create({nroPokemon: 39, apodo: "jigglypuff" , nivel: 1, tableroId: 4}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 5}),
    await Pokemon.create({nroPokemon: 26, apodo: "raichu" , nivel: 1, tableroId: 5}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 6}),
  
])

await pokemonSeed()