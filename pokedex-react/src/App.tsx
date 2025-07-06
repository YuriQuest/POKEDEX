import { useEffect, useState } from "react";
import { api } from "./services/api";
import type { Pokemon } from "./types/pokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  var offset = 20;

  useEffect(() => {
    async function fetchPokemons() {
      try {
        // 1. Busca os primeiros 20 Pokémons
        const response = await api.get(`pokemon?limit=${offset}`);
        const results = response.data.results; // [{ name: string, url: string }]

        // 2. Busca os dados detalhados de cada Pokémon
        const promises = results.map((p: { name: string }) =>
          api.get<Pokemon>(`pokemon/${p.name}`).then((res) => res.data)
        );

        // 3. Aguarda todas as requisições
        const pokemonData = await Promise.all(promises);
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Erro ao buscar Pokémons:", error);
      }
    }

    fetchPokemons();
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Pokédex</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>Carregando Pokémons...</p>
        )}
      </div>
    </div>
  );
}

export default App;
