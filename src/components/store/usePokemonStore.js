import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePokemonStore = create(
  persist(
    (set) => ({
      collection: [],
      catchPokemon: (pokemon) =>
        set((state) => {
          if (state.collection.find((p) => p.name === pokemon.name)) return state;
          return { collection: [...state.collection, pokemon] };
        }),
    }),
    {
      name: 'pokemon-storage',
    }
  )
);
