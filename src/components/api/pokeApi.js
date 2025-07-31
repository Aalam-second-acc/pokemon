import axios from 'axios';

export const fetchPokemonList = async ({ pageParam = 0 }) => {
  const limit = 20;
  const offset = pageParam * limit;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return res.data;
};

export const fetchPokemonDetails = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
