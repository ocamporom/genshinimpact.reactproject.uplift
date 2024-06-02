import GenshinHeader from '../components/GenshinHeader'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import GenshinAuthContext from '../contexts/GenshinAuthContext';
import { useEffect } from 'react';
import style from './GenshinSpecificListOfWeapons.module.css'

function GenshinSpecificListOfWeaponsPage() {

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

  const filteredWeapons = weapons.filter(weapon => weapon.type === name);
  return (
   <>
   <GenshinHeader/>

   <div className={style.allSpecificWeapons}>
      {filteredWeapons.map((weapon, index) => (
        <GenshinSpecificListOfWeapons
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


  </> );
}

export default GenshinSpecificListOfWeaponsPage;