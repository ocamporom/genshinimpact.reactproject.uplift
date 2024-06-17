import { useReducer } from 'react';

function GenshinSpecificListofWeaponsReducer(state, action) {
  if (action.type === 'ADD_SPECIFIC_WEAPONS') {
    return {
      ...state,

      weapons: [...action.payload],
    };
  }

  return state;
}

const useGenshinSpecificListOfWeaponsReducer = () => {
  return useReducer(GenshinSpecificListofWeaponsReducer, {
    weapons: [],
    fetchedSpecificWeapons: [],
  });
};

export default useGenshinSpecificListOfWeaponsReducer;
