import {Pokemon} from "../Models/models.js"


export const pokemonSeed = async ()=> ([
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 1, type: "grass", attack: 55, defense: 40, specialAttack: 50, specialDefense: 45, speed:30,hp:60, image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif', sonido:'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg'}),
    await Pokemon.create({nroPokemon: 1, apodo: "charmander" , nivel: 1, tableroId: 1, type: "fire", attack: 55, defense: 40, specialAttack: 50, specialDefense: 45, speed:30,hp:60, image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif', sonido:'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg'}),
 /*    await Pokemon.create({nroPokemon: 25, apodo: "pikachu" , nivel: 1, tableroId: 1}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 2}),
    await Pokemon.create({nroPokemon: 4, apodo: "charmander" , nivel: 1, tableroId: 2}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 3}),
    await Pokemon.create({nroPokemon: 7, apodo: "squirtle" , nivel: 1, tableroId: 3}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 4}),
    await Pokemon.create({nroPokemon: 39, apodo: "jigglypuff" , nivel: 1, tableroId: 4}),
    await Pokemon.create({nroPokemon: 1, apodo: "bulbasaur" , nivel: 1, tableroId: 5}),
    await Pokemon.create({nroPokemon: 26, apodo: "raichu" , nivel: 1, tableroId: 5}), */
   
    
  
])

await pokemonSeed()