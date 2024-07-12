import style from "./GenshinListOfWeapons.module.css";

function GenshinSpecificListOfWeapons({
  weaponUrl,
  type,
  rarity,
  subStat,
  passiveDesc,
  location,
  ascensionMaterial,
  name,
}) {
  // const weaponUrl = `https://genshin.jmp.blue/weapons/${id}/icon`;

  return (
    <>
      <a id="top" />
      <div className={style.WeaponsList}>
        <img className={style.WeaponImageItself} src={weaponUrl} alt={name} />

        <div className={style.weaponName}>"{name}"</div>
        <hr />
        <div>TYPE: {type}</div>
        <div>RARITY: {rarity}</div>
        <div>SUBSTAT: {subStat}</div>
        <div>LOCATION: {location}</div>
        <div>ASCENSION MATERIAL: {ascensionMaterial}</div>
        <hr />
        <div className={style.weaponDescription}>"{passiveDesc}"</div>
        <div className={style.BackToTopButton}></div>
      </div>
    </>
  );
}

export default GenshinSpecificListOfWeapons;
