import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fallbackImage from "../assets/paimon.png";

import style from "./GenshinCharacterDetailsPage.module.css";
import GenshinCharacterDetailsFooter from "../components/GenshinCharacterDetailsFooter";

function GenshinCharacterDetails() {
  const params = useParams();
  const id = params.id;

  const [character, setCharacter] = useState();

  const fetchGenshinData = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/characters/${id}`);
    const json = await response.json();

    // console.log(json);
    setCharacter(json.data);
  };

  useEffect(() => {
    fetchGenshinData();
  }, []);

  const affiliation =
    character === undefined ? "Loading..." : character.affiliation;
  const description =
    character === undefined ? "Loading..." : character.description;

  const weapon = character === undefined ? "Loading..." : character.weapon_type;
  const weaponType =
    weapon.charAt(0).toUpperCase() + weapon.slice(1).toLowerCase();
  const vision = character === undefined ? "Loading..." : character.vision;
  const rarity = character === undefined ? "Loading..." : character.rarity;
  const title = character === undefined ? "Loading..." : character.title;
  const gender = character === undefined ? "Loading..." : character.gender;
  const nation = character === undefined ? "Loading..." : character.nation;
  const constellation =
    character === undefined ? "Loading..." : character.constellation;
  const name = character === undefined ? "Loading ..." : character.name;
  const iconUrl = character === undefined ? "Loading..." : character.iconUrl;

  return (
    <>
      <div className={style.genshinCharacterDetails}>
        <div className={style.h1Name}>
          <h1>"{name}"</h1>
        </div>
        <hr />
        <div className={style.imageDetails}>
          <img
            src={iconUrl}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        </div>
        <div className={style.CharacterInformation}>
          <hr />

          <div className={style.CharacterInfoParagraphTextOnly}>
            <p>CHARACTER INFORMATION</p>
          </div>
          <hr />
          <div className={style.CharacterCompleteDescription}>
            <p> '{description}'</p>
            <p>TITLE: {title}</p>
            <p>VISION: {vision}</p>
            <p>
              WEAPON:{" "}
              <Link
                to={`/weapons/specific/${weaponType}`}
                style={{
                  pointerEvents: false ? "none" : "unset",
                }}
              >
                {weaponType} List
              </Link>
            </p>
            <p>GENDER: {gender}</p>
            <p>NATION: {nation}</p>
            <p>AFFILIATION: {affiliation}</p>
            <p>RARITY: {rarity}</p>
            <p>CONSTELLATION: {constellation}</p>

            <div className={style.backButton}>
              {/* <Link to="/weapons">To All Weapons&#127919;</Link> <br/> */}
            </div>
          </div>
        </div>
      </div>
      <GenshinCharacterDetailsFooter />
    </>
  );
}

export default GenshinCharacterDetails;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import fallbackImage from "../assets/paimon.png";

// import style from "./GenshinCharacterDetailsPage.module.css";
// import GenshinCharacterDetailsFooter from "../components/GenshinCharacterDetailsFooter";

// function GenshinCharacterDetails({
//   iconUrl,
//   name,
//   description,
//   title,
//   vision,
//   weapon,
//   gender,
//   nation,
//   affiliation,
//   rarity,
//   constellation,
// }) {

//   const [character, setCharacter] = useState();

//   const fetchGenshinData = async () => {
//     const response = await fetch("http://localhost:3000/characters");
//     const json = await response.json();
//     setCharacter(json);
//   };

//   useEffect(() => {
//     fetchGenshinData();
//   }, []);

//   return (
//     <>
//       <div className={style.genshinCharacterDetails}>
//         <div className={style.h1Name}>
//           <h1>"{name}"</h1>
//         </div>
//         <hr />
//         <div className={style.imageDetails}>
//           <img
//             src={iconUrl}
//             alt={name}
//             onError={(e) => (e.target.src = fallbackImage)}
//           />
//         </div>
//         <div className={style.CharacterInformation}>
//           <hr />

//           <div className={style.CharacterInfoParagraphTextOnly}>
//             <p>CHARACTER INFORMATION</p>
//           </div>
//           <hr />
//           <div className={style.CharacterCompleteDescription}>
//             <p> '{description}'</p>
//             <p>TITLE: {title}</p>
//             <p>VISION: {vision}</p>
//             <p>
//               WEAPON:{" "}
//               <Link to={`/weapons/specific/${weapon}`}>
//                 {weapon} List
//               </Link>
//             </p>
//             <p>GENDER: {gender}</p>
//             <p>NATION: {nation}</p>
//             <p>AFFILIATION: {affiliation}</p>
//             <p>RARITY: {rarity}</p>
//             <p>CONSTELLATION: {constellation}</p>

//             <div className={style.backButton}></div>
//           </div>
//         </div>
//       </div>
//       <GenshinCharacterDetailsFooter />
//     </>
//   );
// }

// export default GenshinCharacterDetails;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import fallbackImage from "../assets/paimon.png";

// import style from "./GenshinCharacterDetailsPage.module.css";
// import GenshinCharacterDetailsFooter from "../components/GenshinCharacterDetailsFooter";

// function GenshinCharacterDetails({
//   iconUrl,
//   name,
//   description,
//   title,
//   vision,
//   weapon,
//   gender,
//   nation,
//   affiliation,
//   rarity,
//   constellation,
// }) {
//   // const params = useParams();
//   // let name = params.name;

//   const [character, setCharacter] = useState(null);
//   const fetchGenshinData = async () => {
//     const response = await fetch(
//       // `https://genshin.jmp.blue/characters/${slug}?`
//       "http://localhost:3000/characters"
//     );
//     const json = await response.json();

//     // console.log(json);
//     setCharacter(json);
//   };

//   useEffect(() => {
//     fetchGenshinData();
//   }, []);

//   return (
//     <>
//       <div className={style.genshinCharacterDetails}>
//         <div className={style.h1Name}>
//           <h1>"{name}"</h1>
//         </div>
//         <hr />
//         <div className={style.imageDetails}>
//           <img
//             src={iconUrl}
//             alt={name}
//             onError={(e) => {
//               e.target.src = fallbackImage; // Set fallback image on error
//             }}
//           />
//         </div>
//         <div className={style.CharacterInformation}>
//           <hr />

//           <div className={style.CharacterInfoParagraphTextOnly}>
//             <p>CHARACTER INFORMATION</p>
//           </div>
//           <hr />
//           <div className={style.CharacterCompleteDescription}>
//             <p> '{description}'</p>
//             <p>TITLE: {title}</p>
//             <p>VISION: {vision}</p>
//             <p>
//               WEAPON:{" "}
//               <Link
//                 to={`/weapons/specific/${weapon}`}
//                 style={{
//                   pointerEvents: false ? "none" : "unset",
//                 }}
//               >
//                 {weapon} List
//               </Link>
//             </p>
//             <p>GENDER: {gender}</p>
//             <p>NATION: {nation}</p>
//             <p>AFFILIATION: {affiliation}</p>
//             <p>RARITY: {rarity}</p>
//             <p>CONSTELLATION: {constellation}</p>

//             <div className={style.backButton}>
//               {/* <Link to="/weapons">To All Weapons&#127919;</Link> <br/> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <GenshinCharacterDetailsFooter />
//     </>
//   );
// }

// export default GenshinCharacterDetails;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
