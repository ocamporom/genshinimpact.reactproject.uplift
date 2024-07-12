import { useContext, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinListOfWeapons from "../components/GenshinListOfWeapons";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useParams } from "react-router-dom";
import style from './GenshinListOfWeaponPage.module.css';
import GenshinWeaponFooter from "../components/GenshinWeaponFooter";
import GenshinWeaponSearchFunctionality from '../components/GenshinWeaponSearchFunctionality'

function GenshinListOfWeaponspage() {

  const params = useParams();
  const name = params.name;
 
  const {stateWeapons, dispatchWeapons} = useContext(GenshinAuthContext);


  const fetchWeapons = async () => {
    // const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
        const response = await fetch(`http://localhost:3000/weapons`);
    const json = await response.json();

    console.log("json", json);
    dispatchWeapons({
      type: "ADD_WEAPONS",
      payload: json,
    });
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <>
      <GenshinHeader />
      <GenshinWeaponSearchFunctionality />
      <div className={style.allWeapons}>
      {stateWeapons.weapons.map((weapon) => ( 
        <GenshinListOfWeapons
          id={weapon.id}
          type={weapon.type}
          rarity={weapon.rarity}
          subStat={weapon.subStat}
          passiveDesc={weapon.passiveDesc}
          name={weapon.name}
          ascensionMaterial={weapon.ascensionMaterial}
          location={weapon.location}
          weaponUrl={weapon.weaponUrl}
          key={weapon.id}
        />
      ))}
      </div>
      <GenshinWeaponFooter/>
     
    </>
  );
}

export default GenshinListOfWeaponspage;


