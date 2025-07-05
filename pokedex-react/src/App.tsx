import { useEffect, useState } from "react";
import { api } from "./services/api";
import type { Pokemon } from "./types/pokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await api.get<Pokemon>("pokemon/pikachu");
        setPokemon(response.data);
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {pokemon ? <PokemonCard pokemon={pokemon} /> : <p>Carregando...</p>}
    </div>
  );
}

export default App;
