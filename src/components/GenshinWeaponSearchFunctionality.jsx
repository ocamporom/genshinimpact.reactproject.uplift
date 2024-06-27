import React, { useState, useContext } from "react";
import style from "./GenshinWeaponSearchFunctionality.module.css";

import GenshinAuthContext from "../contexts/GenshinAuthContext";

function GenshinCharacterSearchFunctionality() {
  const { dispatchWeapons } = useContext(GenshinAuthContext);
  const [weaponName, setWeaponName] = useState("");

  const handleOnChange = (e) => {
    setWeaponName(e.target.value);
  };

  const handleOnClick = () => {
    dispatchWeapons({
      type: "FILTER_WEAPONS",
      payload: weaponName,
    });
  };

  return (
    <>
      <div className={style.searchFieldContainer}>
        <input
          className={style.searchField}
          type="search"
          onChange={handleOnChange}
          value={weaponName}
          placeholder="Search Weapon here.."
        />
        <button className={style.searchButton} onClick={handleOnClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default GenshinCharacterSearchFunctionality;
