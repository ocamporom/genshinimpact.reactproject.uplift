import React, { useState, useContext } from "react";
import style from "./GenshinCharacterSearchFunctionality.module.css";

import GenshinAuthContext from "../contexts/GenshinAuthContext";

function GenshinVideoSearchFunctionality() {
  const { dispatchVideos } = useContext(GenshinAuthContext);
  const [videoName, setVideoName] = useState("");

  const handleOnChange = (e) => {
    setVideoName(e.target.value);
  };

  const handleOnClick = () => {
    dispatchVideos({ 
      type: "FILTER_VIDEOS",
      payload: videoName,
    });
  };

  return (
    <>
      <div className={style.searchFieldContainer}>
        <input
          className={style.searchField}
          type="search"
          onChange={handleOnChange}
          value={videoName}
          placeholder="Search Videos here.."
        />
        <button className={style.searchButton} onClick={handleOnClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default GenshinVideoSearchFunctionality