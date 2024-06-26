import { useEffect, useContext, useState, useReducer } from "react";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import GenshinHeader from "../components/GenshinHeader";
import GenshinImage from "../components/GenshinImage";
import style from "./GenshinMainPage.module.css";
import GenshinMainPageFooter from "../components/GenshinMainPageFooter";
import GenshinCharacterSearchFunctionality from "../components/GenshinCharacterSearchFunctionality";
// import backGroundMusic from '../assets/genshinOST.mp3'

function GenshinMainPage() {
  const { stateCharacters, dispatchCharacters } =
    useContext(GenshinAuthContext);

  const fetchGenshinData = async () => {
    const response = await fetch(`https://genshin.jmp.blue/characters/all`);
    const json = await response.json();

    // console.log(json);
    dispatchCharacters({
      type: "ADD_CHARACTERS",
      payload: json,
    });
  };

  useEffect(() => {
    fetchGenshinData();
  }, []);

  return (
    <>
      {/* <div>
      <audio autoPlay>
        <source src={backGroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
     
    </div> */}

      <GenshinHeader />
      <GenshinCharacterSearchFunctionality />

      <div className={style.characters}>
        {stateCharacters.characters.map((char, index) => (
          <GenshinImage name={char.name} key={index} />
        ))}
      </div>
      <GenshinMainPageFooter />
    </>
  );
}

export default GenshinMainPage;
