import { useReducer } from "react";

function GenshinAuthContextReducerForArtifacts(state, action) {
  if (action.type === "ADD_ARTIFACTS") {
    return {
      ...state,
      fetchedArtifacts: [...action.payload],
      artifacts: [...action.payload],
    };
  }

  if (action.type === "FILTER_ARTIFACTS") {
    const artifactName = action.payload.toLowerCase();
    const filteredArtifacts = state.fetchedArtifacts.filter((artifact) => {
      return artifact.name.toLowerCase().startsWith(artifactName);
    });

    return {
      ...state,
      artifacts: filteredArtifacts,
    };
  }

  return state;
}

const useGenshinAuthContextReducerForArtifacts = () => {
  return useReducer(GenshinAuthContextReducerForArtifacts, {
    characters: [],
    weapons: [],
    artifacts: [],
  });
};

export default useGenshinAuthContextReducerForArtifacts;

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
