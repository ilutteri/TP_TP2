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
     type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialAttack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialDefense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sonido: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    tableroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tablero,
        key: 'id'
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Pokemon",
  }
);



export default Pokemon;