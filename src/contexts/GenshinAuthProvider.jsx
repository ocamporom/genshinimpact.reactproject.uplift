import GenshinAuthContext from "./GenshinAuthContext";
import useGenshinAuthContextReducer from "./GenshinAuthContextReducer";
import useGenshinAuthContextReducerForArtifacts from "./GenshinAuthContextReducerForArtifacts";
import useGenshinAuthContextReducerForWeapons from "./GenshinAuthContextReducerForWeapons";
import useGenshinSpecificListOfWeaponsReducer from "./GenshinSpecificListOfWeaponsReducer";

function GenshinAuthProvider({ children }) {
  const [stateCharacters, dispatchCharacters] = useGenshinAuthContextReducer(); // Characters
  const [stateWeapons, dispatchWeapons] =
    useGenshinAuthContextReducerForWeapons(); // Weapons
  const [stateSpecificWeapons, dispatchSpecificWeapons] =
    useGenshinSpecificListOfWeaponsReducer(); // Specific Weapons
  const [stateArtifacts, dispatchArtifacts] =
    useGenshinAuthContextReducerForArtifacts(); // artifacts


  return (
    <GenshinAuthContext.Provider
      value={{
        stateCharacters,
        stateArtifacts,
        stateWeapons,
        stateSpecificWeapons,
        dispatchCharacters,
        dispatchArtifacts,
        dispatchWeapons,
        dispatchSpecificWeapons,
      }}
    >
      {children}
    </GenshinAuthContext.Provider>
  );
}

export default GenshinAuthProvider;
