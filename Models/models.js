import User from "./User.js";
import Tablero from "./Tablero.js";
import Pokemon from "./Pokemon.js";

Tablero.hasMany(User, {foreignKey:"tableroId"})
User.belongsTo(Tablero, {foreignKey:"tableroId"})

Tablero.hasMany(Pokemon, {foreignKey:"tableroId"})
Pokemon.belongsTo(Tablero, {foreignKey:"tableroId"})

export {User, Tablero, Pokemon}