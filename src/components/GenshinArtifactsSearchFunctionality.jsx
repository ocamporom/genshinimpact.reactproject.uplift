import React, { useState, useContext } from "react";
import style from "./GenshinArtifactsSearchFunctionality.module.css";

import GenshinAuthContext from "../contexts/GenshinAuthContext";

function GenshinCharacterSearchFunctionality() {
  const { dispatchArtifacts } = useContext(GenshinAuthContext);
  const [artifactsName, setArtifactsName] = useState("");

  const handleOnChange = (e) => {
    setArtifactsName(e.target.value);
  };

  const handleOnClick = () => {
    dispatchArtifacts({
      type: "FILTER_ARTIFACTS",
      payload: artifactsName,
    });
  };

  return (
    <>
      <div className={style.searchFieldContainer}>
        <input
          className={style.searchField}
          type="search"
          onChange={handleOnChange}
          value={artifactsName}
          placeholder="Search name here.."
        />
        <button className={style.searchButton} onClick={handleOnClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default GenshinCharacterSearchFunctionality;
