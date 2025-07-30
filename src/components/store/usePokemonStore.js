import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  collection: [],
  addToCollection: (pokemon) =>
    set((state) => ({
      collection: [...state.collection, pokemon],
    })),
}));
