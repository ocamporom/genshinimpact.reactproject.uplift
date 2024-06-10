
import GenshinHeader from "../components/GenshinHeader";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useEffect } from "react";
import style from "./GenshinSpecificListOfWeapons.module.css";
import GenshinSpecificListOfWeapon from "../components/GenshinSpecificListOfWeapon";
import GenshinWeaponFooter from "../components/GenshinWeaponFooter";

function GenshinSpecificListOfWeaponsPage() {
  // const params = useParams();
  // const name = params.name;
  // console.log(name);

  const { stateWeapons, dispatchWeapons } = useContext(GenshinAuthContext);
  // const {stateWeapons, dispatchWeapons} = useContext(GenshinAuthContext);
  // const { weapons, setWeapons } = useContext(GenshinAuthContext);
  // const [weapons, setWeapons] = useState([]);

  // console.log("state", stateWeapons);
  const fetchWeapons = async () => {
    // if (stateWeapons.length === 0)
    // empty yung state weapons
    const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
    const json = await response.json();

    // console.log("json", json);
    dispatchWeapons({
      type: "ADD_SPECIFICWEAPONS", // Call the ADD_WEAPONS again
      payload: json,
    });
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  // const filteredWeapons = stateWeapons.filter((weapon) => {
  //   return weapon.type === name;
  // });
   
let filteredWeapons = [];

  if (!Array.isArray(stateWeapons)) {
    
    console.error("stateWeapons is not an array.");

    
} else {
  
  filteredWeapons = stateWeapons.filter((weapon) => {
    return weapon.type === name;
});


  }

  // console.log({ filteredWeapons });
  return (
    <>
      <GenshinHeader />

      <div className={style.allSpecificWeapons}>
        {filteredWeapons.map(
          (
            weapon,
            index //capital S ung type?
          ) => (
            <GenshinSpecificListOfWeapon
              id={weapon.id}
              type={weapon.type}
              rarity={weapon.rarity}
              subStat={weapon.subStat}
              passiveDesc={weapon.passiveDesc}
              name={weapon.name}
              key={index}
            />
          )
        )}
      </div>

      <GenshinWeaponFooter />
    </>
  );
}

export default GenshinSpecificListOfWeaponsPage;






// import GenshinHeader from "../components/GenshinHeader";
// import { useParams } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import GenshinAuthContext from "../contexts/GenshinAuthContext";
// import style from "./GenshinSpecificListOfWeapons.module.css";
// import GenshinSpecificListOfWeapon from "../components/GenshinSpecificListOfWeapon";
// import GenshinWeaponFooter from "../components/GenshinWeaponFooter";

// function GenshinSpecificListOfWeaponsPage() {
//   const params = useParams();
//   const name = params.name;

//   const { stateWeapons, dispatchWeapons } = useContext(GenshinAuthContext);

//   useEffect(() => {
//     const fetchWeapons = async () => {
//       try {
//         const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
//         const json = await response.json();
//         console.log("Fetched weapons:", json); // Log fetched weapons
//         dispatchWeapons({
//           type: "ADD_SPECIFICWEAPONS",
//           payload: json,
//         });
//       } catch (error) {
//         console.error("Error fetching weapons:", error);
//       }
//     };

//     fetchWeapons();
//   }, []);

//   // console.log("State weapons:", stateWeapons); // Log stateWeapons

//   // // Check if stateWeapons is an array
//   // if (Array.isArray(stateWeapons)) {
//   //   console.error("stateWeapons is not an array.");
//   //   return null; // or render a loading indicator or error message
//   // }

//   // Filter weapons based on name
//   const filteredWeapons = stateWeapons.filter((weapon) => weapon.type === name);

//   console.log("Filtered weapons:", filteredWeapons); // Log filtered weapons

//   return (
//     <>
//       <GenshinHeader />

//       <div className={style.allSpecificWeapons}>
//         {stateWeapons.filteredWeapons.map((weapon, index) => (
//           <GenshinSpecificListOfWeapon
//             id={weapon.id}
//             type={weapon.type}
//             rarity={weapon.rarity}
//             subStat={weapon.subStat}
//             passiveDesc={weapon.passiveDesc}
//             name={weapon.name}
//             key={index}
//           />
//         ))}
//       </div>

//       <GenshinWeaponFooter />
//     </>
//   );
// }

// export default GenshinSpecificListOfWeaponsPage;





// // import GenshinHeader from '../components/GenshinHeader'
// // import { useParams } from 'react-router-dom';
// // import { useContext } from 'react';
// // import GenshinAuthContext from '../contexts/GenshinAuthContext';
// // import { useEffect } from 'react';
// // import style from './GenshinSpecificListOfWeapons.module.css'

// // function GenshinSpecificListOfWeaponsPage() {

// //   const params = useParams();
// //   const name = params.name;
// //   // console.log(name);

// //   const { weapons, setWeapons } = useContext(GenshinAuthContext);
// //   // const [weapons, setWeapons] = useState([]);

// //   const fetchWeapons = async () => {
// //     const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
// //     const json = await response.json();

// //     console.log("json", json);
// //     setWeapons(json);
// //   };

// //   useEffect(() => {
// //     fetchWeapons();
// //   }, []);

// //   function filterCapitalizedWords(text){
// //     const capitalizedWords = text.match(/\b[A-Z][a-z]*\b/g);
// //     return capitalizedWords || [];

// //     const { text } = this.props;
// //     let filteredWeapons = this.filterCapitalizedWords(text);

// //   filteredWeapons = weapons.filter(weapon => weapon.type === name);

// //   }
// //   return (
// //    <>
// //    <GenshinHeader/>

// //    <div className={style.allSpecificWeapons}>
// //       {filteredWeapons.map((weapon, index) => (  //capital S ung type?
// //         <GenshinSpecificListOfWeapons
// //           id={weapon.id}
// //           type={weapon.type}
// //           rarity={weapon.rarity}
// //           subStat={weapon.subStat}
// //           passiveDesc={weapon.passiveDesc}
// //           name={weapon.name}
// //           key={index}
// //         />
// //       ))}
// //       </div>

// //   </> );
// // }

// // export default GenshinSpecificListOfWeaponsPage;
