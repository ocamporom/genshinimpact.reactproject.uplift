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
  // console.log(name);
  
  // const { weapons, setWeapons } = useContext(GenshinAuthContext);
  // const [weapons, setWeapons] = useState([]);
  // const {state: {weapons}, dispatch} = useContext(GenshinAuthContext);
  const {stateWeapons, dispatchWeapons} = useContext(GenshinAuthContext);


  const fetchWeapons = async () => {
    const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
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
      {stateWeapons.weapons.map((weapon, index) => ( //slice lang na add 060224 1113H
        <GenshinListOfWeapons
          id={weapon.id}
          type={weapon.type}
          rarity={weapon.rarity}
          subStat={weapon.subStat}
          passiveDesc={weapon.passiveDesc}
          name={weapon.name}
          key={index}
        />
      ))}
      </div>
      <GenshinWeaponFooter/>
     
    </>
  );
}

export default GenshinListOfWeaponspage;


// {artifacts.map((artifact, index) => (
//   <GenshinListOfArtifacts
//      id={artifact.id}
//      maxRarity={artifact.max_rarity}
//      name={artifact.name}
//      twoPieceBonus={artifact['2-piece_bonus']}
//      fourPieceBonus={artifact['4-piece_bonus']}
//      key={index} />
// )}