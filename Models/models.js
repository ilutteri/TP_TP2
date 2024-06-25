import User from "./User.js";
import Tablero from "./Tablero.js";
import Pokemon from "./Pokemon.js";
import Rol from "./Rol.js";


User.hasOne(Tablero, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Tablero.belongsTo(User, { foreignKey: "userId" });

Rol.hasMany(User, { foreignKey: "rolId" })
User.belongsTo(Rol, { foreignKey: "rolId" })

Tablero.hasMany(Pokemon, {
  foreignKey: "tableroId",
  onDelete: "CASCADE",
  hooks: true,
});
Pokemon.belongsTo(Tablero, {
  foreignKey: "tableroId",
  hooks: true
});

export { User, Tablero, Pokemon, Rol };