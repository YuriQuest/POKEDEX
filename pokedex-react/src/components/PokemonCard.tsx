import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="border p-4 rounded shadow w-60 h-80 flex flex-col items-center bg-white">
        <img className="w-40 max-h-40 " src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <div>
            <h3 className="text-x capitalize">{pokemon.id}</h3>
            <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
            <ol className="">
                {pokemon.types.map((t) => <div > {t.type.name} </div>)}
            </ol>
        </div>
    </div>
  );
};
