import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./GenshinCharacterDetailsPage.module.css";



const alternateImageMap = {
  "Arataki Itto": "arataki-itto",
  "Kamisato Ayaka": "ayaka",
  "Kamisato Ayato": "ayato",
  "Hu Tao": "hu-tao",
  "Kaedehara Kazuha": "kazuha",
  "Sangonomiya Kokomi": "kokomi",
  "Kuki Shinobu": "kuki-shinobu",
  "Raiden Shogun": "raiden",
  "Kujou Sara": "sara",
  "Shikanoin Heizou": "shikanoin-heizou",
  "Yae Miko": "yae-miko",
  "Yun Jin": "yun-jin",
  'Travelers': "traveler-anemo",
  'Travelers': "traveler-dendro",
  'Travelers': "traveler-electro",
  'Travelers': "traveler-geo",
  'Travelers': "traveler-hydro",
};

function GenshinCharacterDetails() {
  const params = useParams();
  const name = params.name;
  console.log(name);

  const slug = alternateImageMap[name]
    ? alternateImageMap[name]
    : name.toLowerCase();
  //albedo
  const imgUrl =
    name === "Traveler"
      ? "https://assetsio.gnwcdn.com/genshin-impact-traveler.jpg?width=880&quality=80&format=jpg&auto=webp"
      : `https://genshin.jmp.blue/characters/${slug}/icon-big`; //ay nitang passport size pix nila..

  const [character, setCharacter] = useState();
  const fetchGenshinData = async () => {
    //eto ung description nila sa baba
    const response = await fetch(
      `https://genshin.jmp.blue/characters/${slug}?`
    );
    const json = await response.json();

    console.log(json);
    setCharacter(json);
  };

  useEffect(() => {
    fetchGenshinData();
  }, []);

  const affiliation =
    character === undefined ? "Loading..." : character.affiliation;
  const description =
    character === undefined ? "Loading..." : character.description;
  const weapon = character === undefined ? "Loading..." : character.weapon;
  const vision = character === undefined ? "Loading..." : character.vision;
  const rarity = character === undefined ? "Loading..." : character.rarity;
  const title = character === undefined ? "Loading..." : character.title;
  const gender = character === undefined ? "Loading..." : character.gender;
  const nation = character === undefined ? "Loading..." : character.nation;
  const constellation =
    character === undefined ? "Loading..." : character.constellation;
  // const rarity = character === undefined ? "Loading..." : character.rarity;
  // const rarity = character === undefined ? "Loading..." : character.rarity;

  // const talents = character === undefined ? "Loading..." : character.skillTalents[name];

  return (
    <>
      <div className={style.genshinCharacterDetails}>
        <div className={style.h1Name}>
          <h1>"{name}"</h1> 
          
        </div>
        <hr />
        <div className={style.imageDetails}>
          <img src={imgUrl} alt={name} />
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

            <div>
              <p>WEAPON: {weapon}</p>
            </div>
            <p>GENDER: {gender}</p>
            <p>NATION: {nation}</p>
            <p>AFFILIATION: {affiliation}</p>
            <p>RARITY: {rarity}</p>
            <p>CONSTELLATION: {constellation}</p>

            <div className={style.backButton}>
            <Link to="/weapons/specific">To  Weapon Type&#127919;</Link> <br/> 
            <Link to="/weapons">To All Weapons&#127919;</Link> <br/>
            <Link to="/artifacts">To All Artifacts&#127919;</Link> <br/>
              <Link to="/">&#128281;</Link><br/>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenshinCharacterDetails;
