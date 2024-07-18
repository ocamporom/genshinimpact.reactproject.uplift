import GenshinAuthContext from "./GenshinAuthContext";
import useGenshinAuthContextReducer from "./GenshinAuthContextReducer";
import useGenshinAuthContextReducerForArtifacts from "./GenshinAuthContextReducerForArtifacts";
import useGenshinAuthContextReducerForWeapons from "./GenshinAuthContextReducerForWeapons";
import useGenshinSpecificListOfWeaponsReducer from "./GenshinSpecificListOfWeaponsReducer";
import useGenshinAuthContextReducerForVideos from "./GenshinAuthContextReducerForVideos";




function GenshinAuthProvider({ children }) {
  const [stateCharacters, dispatchCharacters] = useGenshinAuthContextReducer(); // Characters
  const [stateWeapons, dispatchWeapons] =
    useGenshinAuthContextReducerForWeapons(); // Weapons
  const [stateSpecificWeapons, dispatchSpecificWeapons] =
    useGenshinSpecificListOfWeaponsReducer(); // Specific Weapons
  const [stateArtifacts, dispatchArtifacts] =
    useGenshinAuthContextReducerForArtifacts(); // artifacts
  const [stateVideos, dispatchVideos] = useGenshinAuthContextReducerForVideos();// videos

  return (
    <GenshinAuthContext.Provider
      value={{
        stateCharacters,
        stateArtifacts,
        stateWeapons,
        stateSpecificWeapons,
        stateVideos,
        dispatchCharacters,
        dispatchArtifacts,
        dispatchWeapons,
        dispatchSpecificWeapons,
        dispatchVideos,
      }}
    >
      {children}
    </GenshinAuthContext.Provider>
  );
}

export default GenshinAuthProvider;
