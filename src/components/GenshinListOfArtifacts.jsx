import style from "./GenshinListOfArtifacts.module.css";
import { Link } from "react-router-dom";

function GenshinListOfArtifacts({
  id,
  maxRarity,
  name,
  twoPieceBonus,
  fourPieceBonus,
}) {
  //  const [imgInfo, setImgInfo] = useState({
      
  //  })


  const artifactsUrl = `https://genshin.jmp.blue/artifacts/${id}/circlet-of-logos`;
  const artifactsUrl2 = `https://genshin.jmp.blue/artifacts/${id}/flower-of-life`;
  const artifactsUrl3 = `https://genshin.jmp.blue/artifacts/${id}/goblet-of-eonothem`;
  const artifactsUrl4 = `https://genshin.jmp.blue/artifacts/${id}/plume-of-death`;
  const artifactsUrl5 = `https://genshin.jmp.blue/artifacts/${id}/sands-of-eon`;

  return (
    <>
    <div>
      <a id="top" />
      <div className={style.ArtifactsList}>
        <img
          className={style.ArtifactsImageItself}
          src={artifactsUrl}
          alt={name}
        
        />
        <img
          className={style.ArtifactsImageItself}
          src={artifactsUrl2}
          alt={name}
        />
        <img
          className={style.ArtifactsImageItself}
          src={artifactsUrl3}
          alt={name}
        />
        <img
          className={style.ArtifactsImageItself}
          src={artifactsUrl4}
          alt={name}
        />
        <img
          className={style.ArtifactsImageItself}
          src={artifactsUrl5}
          alt={name}
        />
        <hr />
        <div>NAME: {name}</div>
        <div>2-PIECE-BONUS: {twoPieceBonus}</div>
        <div>4-PIECE-BONUS: {fourPieceBonus}</div>

        <div>MAX RARITY: {maxRarity}</div>

        <div className={style.BackToTopButton2}>
          <a href="#top">Back to Top</a>
          <br />
          <Link to="/weapons">Go to ALL Weapons&#127919;</Link>
          <br />
          <Link to="/">Back to Home</Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default GenshinListOfArtifacts;

//  async function fetchWeapons() {
//   const response = await fetch('https://genshin.jmp.blue/weapons/all');
//   const json = await response.json(); // Array of weapon item object
//                                                                // 👇 Depende kung anong paano mo nakukuha yung character
//   const filteredWeapons = json.filter((weapon) => weapon.type === currentCharacter.weapon);

//   setWeapons(filteredWeapons);
// }

{
  /* const weapon = character === undefined ? "Loading..." : character.weapon;
      <div className={style.WeaponList}>
        <img src={weapons} alt={weapon} />
        <p>{weapon}</p>
       

      </div> */
}

//   const[weapons, setWeapons] = useState()

//   async function fetchWeapons() {//diretso filter na ito so ilabas mo sya sa baba
//    // 👇 Depende kung anong paano mo nakukuha yung character
//  const response = await fetch(`https://genshin.jmp.blue/weapons/all?type=${character.weapon}`);
//  const json = await response.json(); // Array of weapon item object

//  setWeapons(json);
//  }

//  // useEffect(() => {
//  //   fetchWeapons();
//  // }, []);

//  useEffect(() => {
//    if (character) {
//      fetchWeapons();
//    }
//  }, [character]);

//  const weapon = character === undefined ? "Loading..." : character.weapon;
