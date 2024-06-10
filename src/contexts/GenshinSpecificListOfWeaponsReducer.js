import { useReducer } from "react";

function GenshinSpecificListofWeaponsReducer(state, action) {
  if (action.type === "ADD_SPECIFICWEAPONS") {
    return {
      ...state,
      fetchedSpecificWeapons: [...action.payload],
      weapons: [...action.payload],
    };
  }

  if (action.type === "FILTER_SPECIFICWEAPONS") {
    const SpecificWeaponName = action.payload.toLowerCase();
    const filteredSpecificWeapons = state.fetchedSpecificWeapons.filter((weapon) => {
      return weapon.name.toLowerCase().startsWith(SpecificWeaponName);
    });

    return {
      ...state,
      weapons: filteredSpecificWeapons,
    };
  }

  return state;
}

const useGenshinSpecificListOfWeaponsReducer = () => {
  return useReducer(GenshinSpecificListofWeaponsReducer, {
    characters: [],
    weapons: [],
    artifacts: [],
  });
};

export default useGenshinSpecificListOfWeaponsReducer;

// function GenshinAuthContextReducer(state, action) {
//   //states:
//   // weapons : []
//   // artifacts : []
//   // characters: []

//   switch (action.type) {
//     //CASE: 'ADD_TO_SEARCH'
//     case "ADD_TO_SEARCH":
//       state.weapons.push(action.payload);
//       return {
//         ...state,
//         weapons: state.weapons,
//       };

//     //CASE: 'SET_TO_SEARCH'
//     case "SET_THE_SEARCH":
//       state.weapons.push(action.payload);
//       return {
//         ...state,
//         weapons: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// const useGenshinAuthContextReducer = () => {
//   return useReducer(GenshinAuthContextReducer, {
//     characters: [],
//     weapons: [],
//     artifacts: [],
//   });
// };

// export default useGenshinAuthContextReducer;
