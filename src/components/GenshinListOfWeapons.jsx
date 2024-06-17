import style from "./GenshinListOfWeapons.module.css";
import { useState } from "react";

function GenshinListOfWeapons({
  id,
  type,
  rarity,
  subStat,
  passiveDesc,
  ascensionMaterial,
  location,
  name,
}) {
  const weaponUrl = `https://genshin.jmp.blue/weapons/${id}/icon`;
  const [weaponsUrl, setWeaponUrl] = useState(`${weaponUrl}`);

  const handleImageError = () => {
    // Logic to handle image loading error
    setWeaponUrl("../assets/fallback-image.png");
  };

  return (
    <div>
      <a id="top" />
      <div className={style.WeaponsList}>
        <img
          className={style.WeaponImageItself}
          src={weaponsUrl}
          alt={name}
          onError={handleImageError}
        />

        <div className={style.weaponName}>"{name}"</div>
        <hr />
        <div>TYPE: {type}</div>
        <div>RARITY: {rarity}</div>
        <div>SUBSTAT: {subStat}</div>
        <div>LOCATION: {location}</div>
        <div>ASCENSION MATERIAL: {ascensionMaterial}</div>
        <hr/>
        <div className={style.weaponDescription}>
          "{passiveDesc}""
        </div>
        
        <div className={style.BackToTopButton}></div>
      </div>
    </div>
  );
}

export default GenshinListOfWeapons;
