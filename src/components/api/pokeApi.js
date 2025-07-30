import { useQuery } from 'react-query';

export const fetchPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const detail = await res.json();
      return {
        name: detail.name,
        image: detail.sprites.front_default,
        base_experience: detail.base_experience,
      };
    })
  );

  return detailed;
};

export const usePokemons = () => {
  return useQuery('pokemons', fetchPokemonList);
};
