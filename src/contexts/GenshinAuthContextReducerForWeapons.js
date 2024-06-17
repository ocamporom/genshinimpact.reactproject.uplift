import { useReducer } from "react";

function GenshinAuthContextReducerForWeapons(state, action) {
  if (action.type === "ADD_WEAPONS") {
    return {
      ...state,
      fetchedWeapons: [...action.payload],
      weapons: [...action.payload],
    };
  }

  if (action.type === "FILTER_WEAPONS") {
    const weaponName = action.payload.toLowerCase();
    const filteredWeapons = state.fetchedWeapons.filter((weapon) => {
      return weapon.name.toLowerCase().startsWith(weaponName);
    });

    return {
      ...state,
      weapons: filteredWeapons,
    };
  }

  return state;
}

const useGenshinAuthContextReducerForWeapons = () => {
  return useReducer(GenshinAuthContextReducerForWeapons, {
    characters: [],
    weapons: [],
    artifacts: [],
  });
};

export default useGenshinAuthContextReducerForWeapons;
