import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="border p-4 rounded shadow w-60 text-center bg-white">
      <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        <strong>Tipo(s):</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
    </div>
  );
};
