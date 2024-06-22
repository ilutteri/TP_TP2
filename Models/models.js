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


Pokemon.addHook("beforeValidate", async (tablero) => {
  const pokemonCount = await Pokemon.count({ where: { tableroId: tablero.id } });
  if (pokemonCount > 6) {
    throw new Error("Un tablero no puede tener mas de 6 Pokémon.");
  }
});

export { User, Tablero, Pokemon, Rol };