import GenshinAuthContext from "./GenshinAuthContext";
import { useState } from "react"; //do not forget to import
import useGenshinAuthContextReducer from "./GenshinAuthContextReducer";
import useGenshinAuthContextReducerForArtifacts from "./GenshinAuthContextReducerForArtifacts";
import useGenshinAuthContextReducerForWeapons from "./GenshinAuthContextReducerForWeapons"

function GenshinAuthProvider({ children }) {
  // const [weapons, setWeapons] = useState([]); //sakto lang na array ya anyaran nya [] keng kilub
  // const [characters, setCharacters] = useState([]); //kunin mo lahat ng use state sa lahat ng pages if ever
  // const [artifacts, setArtifacts] = useState([]); 
  
  
  // dun sa reducer, tatanggalin ung sa taaas tpos ung ilalagay ung customized state like

  const [stateCharacters, dispatchCharacters] = useGenshinAuthContextReducer() // Characters
  const [stateWeapons, dispatchWeapons] = useGenshinAuthContextReducerForWeapons()// Weapons
  const [stateArtifacts, dispatchArtifacts] = useGenshinAuthContextReducerForArtifacts() // artifacts
  // then ipasa ung state , dispatch dun sa value..

  //wala na ung mga usestate sa taas at mga variables sa baba pag useReducer na
  
  return (
        <GenshinAuthContext.Provider
          value={{
            stateCharacters,
            stateArtifacts,
            stateWeapons,
            dispatchCharacters,
            dispatchArtifacts,
            dispatchWeapons
            // weapons,
            // setWeapons,  //tpus declare mula ngan.. best practice is lagyan ng S ing word dahil plural ya or dakal ya laman
            // characters,
            // setCharacters,
            // artifacts,
            // setArtifacts
          }}
          >
          {children}
        </GenshinAuthContext.Provider>
  );
}

export default GenshinAuthProvider;
