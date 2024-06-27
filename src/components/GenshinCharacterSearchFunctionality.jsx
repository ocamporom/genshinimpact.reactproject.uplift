import React, { useState, useContext } from "react";
import style from "./GenshinCharacterSearchFunctionality.module.css";

import GenshinAuthContext from "../contexts/GenshinAuthContext";

function GenshinCharacterSearchFunctionality() {
  const { dispatchCharacters } = useContext(GenshinAuthContext);
  const [characterName, setCharacterName] = useState("");

  const handleOnChange = (e) => {
    setCharacterName(e.target.value);
  };

  const handleOnClick = () => {
    dispatchCharacters({
      type: "FILTER_CHARACTERS",
      payload: characterName,
    });
  };

  return (
    <>
      <div className={style.searchFieldContainer}>
        <input
          className={style.searchField}
          type="search"
          onChange={handleOnChange}
          value={characterName}
          placeholder="Search Character here.."
        />
        <button className={style.searchButton} onClick={handleOnClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default GenshinCharacterSearchFunctionality;
