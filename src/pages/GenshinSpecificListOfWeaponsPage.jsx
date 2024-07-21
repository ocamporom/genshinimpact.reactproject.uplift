import GenshinHeader from "../components/GenshinHeader";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useEffect } from "react";
import style from "./GenshinSpecificListOfWeapons.module.css";
import GenshinSpecificListOfWeapon from "../components/GenshinSpecificListOfWeapon";
import GenshinWeaponFooter from "../components/GenshinWeaponFooter";

function GenshinSpecificListOfWeaponsPage() {
  const params = useParams();
  const name = params.name;

  const { stateSpecificWeapons, dispatchSpecificWeapons } =
    useContext(GenshinAuthContext);

  const fetchWeapons = async () => {
    // const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/weapons?type=${name}`);
    const json = await response.json();

    dispatchSpecificWeapons({
      type: "ADD_SPECIFIC_WEAPONS",
      payload: json,
    });
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  const filteredWeapons = stateSpecificWeapons.weapons.filter((weapon) => {
    return weapon.type === name;
  });

  return (
    <>
      <GenshinHeader />

      <div className={style.allSpecificWeapons}>
        {filteredWeapons.map((weapon, index) => (
          <GenshinSpecificListOfWeapon
            id={weapon.id}
            type={weapon.type}
            rarity={weapon.rarity}
            subStat={weapon.subStat}
            passiveDesc={weapon.passiveDesc}
            name={weapon.name}
            ascensionMaterial={weapon.ascensionMaterial}
            location={weapon.location}
            weaponUrl={weapon.weaponUrl}
            key={index}
          />
        ))}
      </div>

      <GenshinWeaponFooter />
    </>
  );
}

export default GenshinSpecificListOfWeaponsPage;
