import { useEffect, useContext, useState, useReducer } from "react";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import GenshinHeader from "../components/GenshinHeader";
import GenshinImage from "../components/GenshinImage";
import style from "./GenshinMainPage.module.css";
import GenshinMainPageFooter from "../components/GenshinMainPageFooter";
import useGenshinAuthContextReducer from "../contexts/GenshinAuthContextReducer";
import GenshinCharacterSearchFunctionality from "../components/GenshinCharacterSearchFunctionality";

function GenshinMainPage() {
  // const {characters, setCharacters} = useReducer(useGenshinAuthContextReducer); //desctructure ng mga state at setter tpus pasa me itang authcontext kilub usecontext

  const { stateCharacters, dispatchCharacters } = useContext(GenshinAuthContext);
  // const {state: {characters}} =  useContext(GenshinAuthContext);

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
