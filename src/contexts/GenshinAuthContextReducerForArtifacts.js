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
