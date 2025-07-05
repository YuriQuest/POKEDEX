import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="border p-4 rounded shadow w-60 text-center bg-white">
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <h3 className="text-x capitalize">{pokemon.id}</h3>
        <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
        <ol>
            {pokemon.types.map((t) => t.type.name)}
        </ol>
    </div>
  );
};
