export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
    other: {
        dream_world: {
            front_default: string;
        };
        home: {
            front_default: string;
        };
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
