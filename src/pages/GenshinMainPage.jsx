import { useEffect, useContext, useState } from "react";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import GenshinHeader from "../components/GenshinHeader";
import GenshinImage from "../components/GenshinImage";
import style from "./GenshinMainPage.module.css";
import GenshinSearchFunctionality from "../components/GenshinSearchFunctionality";

function GenshinMainPage() {
  // ito ung PAGE na maraming characters.! so kuhain muna ung kembot ng mga pictures!
  // const [characters, setCharacters] = useState([]);

  const {characters, setCharacters} = useContext(GenshinAuthContext); //desctructure ng mga state at setter tpus pasa me itang authcontext kilub usecontext
   console.log('context na ito pag lumitaw', typeof characters)


  const fetchGenshinData = async () => {
    const response = await fetch(`https://genshin.jmp.blue/characters/all`);
    const json = await response.json();

    console.log(json);
    setCharacters(json);
  };

  useEffect(() => {
    fetchGenshinData();
  }, []);

  return (
    <>
      <GenshinHeader />
      <GenshinSearchFunctionality />

      <div className={style.characters}>
        {characters.map((char, index) => (
          <GenshinImage name={char.name} key={index} />
        ))}
      </div>
    </>
  );
}

export default GenshinMainPage;
