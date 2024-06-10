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
