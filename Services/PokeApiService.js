class PokeApiService {
  
  API_BASE_URL = 'https://pokeapi.co/api/v2';

  async getAll() {
      try {
          const response = await fetch(`${this.API_BASE_URL}/pokemon?limit=100251`);
          const data = await response.json();
          return data.results;
      } catch (error) {
          console.error('Error fetching list of Pokemon:', error);
          
      }
  }

  async getPokemonDetails(nameOrId) {
      try {
          const response = await fetch(`${this.API_BASE_URL}/pokemon/${nameOrId}`);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error(`Error fetching details for ${nameOrId}:`, error);
      
      }
  }
}

export default PokeApiService;
