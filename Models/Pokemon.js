import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Tablero from "./Tablero.js";
class Pokemon extends Model {}

Pokemon.init(
  {
    nroPokemon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    apodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },

    
  },
  {
    sequelize: connection,
    modelName: "Pokemon",
  }
);

Pokemon.beforeCreate(async (pokemon) => {
  const tablero = await Tablero.findByPk(pokemon.tableroId);
  if (!tablero) {
    throw new Error("El tableroId proporcionado no existe");
  }
});


export default Pokemon;
