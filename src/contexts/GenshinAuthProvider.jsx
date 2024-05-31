import GenshinAuthContext from "./GenshinAuthContext";
import { useState } from "react"; //do not forget to import

function GenshinAuthProvider({ children }) {
  const [weapons, setWeapons] = useState([]); //sakto lang na array ya anyaran nya [] keng kilub
  const [characters, setCharacters] = useState([]); //kunin mo lahat ng use state sa lahat ng pages if ever
  const [artifacts, setArtifacts] = useState([]); 
  return (
    <GenshinAuthContext.Provider
      value={{
        weapons,
        setWeapons,  //tpus declare mula ngan.. best practice is lagyan ng S ing word dahil plural ya or dakal ya laman
        characters,
        setCharacters,
        artifacts,
        setArtifacts
      }}
    >
      {children}
    </GenshinAuthContext.Provider>
  );
}

export default GenshinAuthProvider;
