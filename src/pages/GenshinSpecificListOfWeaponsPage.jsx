import GenshinHeader from '../components/GenshinHeader'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import GenshinAuthContext from '../contexts/GenshinAuthContext';
import { useEffect } from 'react';
import style from './GenshinSpecificListOfWeapons.module.css';
import GenshinSpecificListOfWeapon from '../components/GenshinSpecificListOfWeapon';
import GenshinWeaponFooter from '../components/GenshinWeaponFooter'



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
  

  const filteredWeapons = weapons.filter(weapon => {
    return weapon.type === name
  });

  console.log({filteredWeapons});
  return (
   <>
   
   <GenshinHeader/>

   <div className={style.allSpecificWeapons}>
      {filteredWeapons.map((weapon, index) => (  //capital S ung type?
        <GenshinSpecificListOfWeapon
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


  </> );
}

export default GenshinSpecificListOfWeaponsPage;





// import GenshinHeader from '../components/GenshinHeader'
// import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import GenshinAuthContext from '../contexts/GenshinAuthContext';
// import { useEffect } from 'react';
// import style from './GenshinSpecificListOfWeapons.module.css'

// function GenshinSpecificListOfWeaponsPage() {

//   const params = useParams();
//   const name = params.name;
//   // console.log(name);
  
//   const { weapons, setWeapons } = useContext(GenshinAuthContext);
//   // const [weapons, setWeapons] = useState([]);

//   const fetchWeapons = async () => {
//     const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
//     const json = await response.json();

//     console.log("json", json);
//     setWeapons(json);
//   };

//   useEffect(() => {
//     fetchWeapons();
//   }, []);

//   function filterCapitalizedWords(text){
//     const capitalizedWords = text.match(/\b[A-Z][a-z]*\b/g);
//     return capitalizedWords || [];

//     const { text } = this.props;
//     let filteredWeapons = this.filterCapitalizedWords(text);

//   filteredWeapons = weapons.filter(weapon => weapon.type === name);

//   }
//   return (
//    <>
//    <GenshinHeader/>

//    <div className={style.allSpecificWeapons}>
//       {filteredWeapons.map((weapon, index) => (  //capital S ung type?
//         <GenshinSpecificListOfWeapons
//           id={weapon.id}
//           type={weapon.type}
//           rarity={weapon.rarity}
//           subStat={weapon.subStat}
//           passiveDesc={weapon.passiveDesc}
//           name={weapon.name}
//           key={index}
//         />
//       ))}
//       </div>


//   </> );
// }

// export default GenshinSpecificListOfWeaponsPage;