import PokeApiService from "../Services/PokeApiService.js";

const _pokeApiService = new PokeApiService();

class PokeApiControllers {

    async getAllPokeApi(req, res) {
        try {
            const data = await _pokeApiService.getAll();
            if (!data) throw new Error('No data found');
            res.status(200).send(data);
        } catch (error) {
            res.status(503).send({ message: "Error fetching all pokemons" });
            console.error(error);
        }
    }

    async getPokeApiDetails(req, res) {
        try {
            const { nameOrId } = req.params;
            const data = await _pokeApiService.getPokemonDetails(nameOrId);
            if (!data) throw new Error(`No data found for ${nameOrId}`);
            res.status(200).send(data);
        } catch (error) {
            res.status(503).send({ message: `Error fetching pokemon details` });
            console.error(error);
        }
    }
}

export default PokeApiControllers;
