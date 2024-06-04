import style from "./GenshinListOfWeapons.module.css";
import { Link } from "react-router-dom";

function GenshinListOfWeapons({
  id,
  type,
  rarity,
  subStat,
  passiveDesc,
  name,
}) {
  const weaponUrl = `https://genshin.jmp.blue/weapons/${id}/icon`;

  // console.log("id", id);
  // console.log("name", name);

  return (
    <div>
      <a id="top" />
      <div className={style.WeaponsList}>
        <img className={style.WeaponImageItself} src={weaponUrl} alt={name} />
        <hr />
        <div>NAME: {name}</div>
        <div>TYPE: {type}</div>
        <div>RARITY: {rarity}</div>
        <div>SUBSTAT: {subStat}</div>
        <div>DESCRIPTION: {passiveDesc}</div>
        <div className={style.BackToTopButton}>
          {/* <a href="#top">Back to Top</a><br/>
        <Link to='/artifacts'>Go to Artifacts&#128255;</Link><br/>
        <Link to='/'>Back to Home</Link> */}
        </div>
      </div>
    </div>
  );
}

export default GenshinListOfWeapons;

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
