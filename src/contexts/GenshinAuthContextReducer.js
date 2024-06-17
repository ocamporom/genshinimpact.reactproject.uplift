import { useReducer } from 'react';

function GenshinAuthContextReducer(state, action) {
  if (action.type === 'ADD_CHARACTERS') {
    return {
      ...state,
      fetchedCharacters: [...action.payload],
      characters: [...action.payload],
    };
  }

  if (action.type === 'FILTER_CHARACTERS') {
    const characterName = action.payload.toLowerCase();
    const filteredCharacters = state.fetchedCharacters.filter((character) => {
      return character.name.toLowerCase().startsWith(characterName);
    });

    return {
      ...state,
      characters: filteredCharacters,
    };
  }

  return state;
}

const useGenshinAuthContextReducer = () => {
  return useReducer(GenshinAuthContextReducer, {
    characters: [],
    weapons: [],
    artifacts: [],
  });
};

export default useGenshinAuthContextReducer;
