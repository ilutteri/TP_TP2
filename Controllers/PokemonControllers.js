import { Pokemon } from "../Models/models.js";

class PokemonControllers {
  async getAllPokemon(req, res) {
    try {
      const result = await Pokemon.findAll({
        attributes: ["id", "name", "mail"]
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async getPokemonById(req, res) {
    try {
      const { id } = req.params;
        const result = await Pokemon.findOne({
         attributes: ["id", "nroPokemon", "apodo", "nivel"],
        where: {
          id,
         },
       });
      
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async createPokemon(req, res) {
    try {
      const { nroPokemon, apodo, nivel } = req.body;
      const result = await Pokemon.create({
        nroPokemon,
        apodo,
        nivel,
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.apodo} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async updatePokemon(req, res) {
    try {
      const { id } = req.params;
      const { nroPokemon, apodo, nivel } = req.body;
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
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
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
      console.log(`🚀 ~ PokemonControllers ~ updatePokemon ~ result:`, result);
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default PokemonControllers;
