import { Pokemon } from "../Models/models.js";
import { Tablero } from "../Models/models.js"

class PokemonControllers {

  async getAllPokemon(req, res) {
    try {
      const result = await Pokemon.findAll({
        attributes: ["id", "nroPokemon", "apodo", "nivel", "tableroId",
          "attack","defense","specialAttack","specialDefense","speed","hp","type","image","sonido"
        ]
      });
      
      res.status(200).send({ success: true, return: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async getPokemonByUserId(req, res) {
    try {
      const { id } = req.params;
      const tabId = await Tablero.findOne(id)
        const result = await Pokemon.findOne({
         attributes: ["id", "nroPokemon", "apodo", "nivel", "tableroId",
          "attack","defense","specialAttack","specialDefense","speed","hp","type","image","sonido"
        ],
        where: {
          tableroId:tabId,
         },
       });
      
      res.status(200).send({ success: true, return: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async getPokemonByNroPokemon(req, res) {
    try {
      const { nroPokemon } = req.params;
        const result = await Pokemon.findAll({
         attributes: ["id", "nroPokemon", "apodo", "nivel"],
        where: {
          nroPokemon,
         },
       });
      
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async getPokemonByTableroId(req, res) {
    try {
      const { tableroId } = req.params;
        const result = await Pokemon.findAll({
         attributes: ["id", "nroPokemon", "apodo", "nivel", "tableroId",
          "attack","defense","specialAttack","specialDefense","speed","hp","type","image","sonido"
        ],
        where: {
          tableroId,
         },
       });
      
      res.status(200).send({ success: true, return: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
 
  async createPokemon(req, res) {
    try {
      const { nroPokemon, apodo, nivel, attack, defense, specialAttack, specialDefense, speed, hp, type, image, sonido } = req.body;
      const userId = req.userId; // Obtener el userId del middleware

      const result = await Pokemon.create({
        nroPokemon,
        apodo,
        nivel,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
        hp,
        type,
        image,
        sonido,
      }, { userId });

      res.status(200).send({
        success: true,
        message: `Pokemon ${result.dataValues.apodo} creado con exito`,
      });
    } catch (error) {
      res.status(403).send({ success: false, message: error.message });
    }
  }
  async updatePokemon(req, res) {
    try {
      const { id } = req.params;
      const { nroPokemon, apodo, nivel} = req.body;
      const result = await Pokemon.update(
        { nroPokemon, apodo, nivel },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: `Pokemon ${result.apodo} modificado con exito` });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async deletePokemon(req, res) {
    try {
      const { id } = req.params;
      const result = await Pokemon.destroy({
        where: {
          id,
        },
      });
      res
        .status(200)
        .send({ success: true, message: "pokemon eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
}

export default PokemonControllers;
