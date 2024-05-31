import { useContext, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinListOfWeapons from "../components/GenshinListOfWeapons";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useParams } from "react-router-dom";

function GenshinListOfWeaponspage() {

  const params = useParams();
  const name = params.name;
  // console.log(name);
  
  const { weapons, setWeapons } = useContext(GenshinAuthContext);
  // const [weapons, setWeapons] = useState([]);

  const fetchWeapons = async () => {
    const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
    const json = await response.json();

    console.log("json", json);
    setWeapons(json);
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <>
      <GenshinHeader />

      {weapons.map((weapon, index) => (
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
    </>
  );
}

export default GenshinListOfWeaponspage;
