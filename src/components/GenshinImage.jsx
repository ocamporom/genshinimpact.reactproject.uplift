import { Link } from "react-router-dom";
import { alternateImageMap } from "../data"; // ginawan ng variable via js pra sa DRY principle.
import style from "./GenshinImage.module.css";

function GenshinImage({ name }) {
  const slug = alternateImageMap[name] // truthy
    ? alternateImageMap[name] // true kasi based on the given objects, it has corresponding value sa taas na lower case
    : name.toLowerCase(); // false kasi ung ibang names are capitalized first letter and single word only!!!!
  //albedo
  const imgUrl =
    name === "Traveler"
      ? "https://assetsio.gnwcdn.com/genshin-impact-traveler.jpg?width=880&quality=80&format=jpg&auto=webp"
      : `https://genshin.jmp.blue/characters/${slug}/card`;

  // true so if the name is equals to Traveler(as per the API, true value will show an image via link),ketang source ala ya picture so
  //need to improvise neh

  return (
    //lahat ng info na nasa loob ng link ay link narin kasi makaenclose ya!so if check mo sa page, clickable la ngan and also
    //ung DESTINATION PAGCLICK is ung GENSHIN CHARACTER DETAILS!
    <>
      <Link
        to={`/characters/${name}`}
        onClick={() => {
          // purpose of checking if the link is working
          console.log("Link clicked");
        }}
      >
        <div className={style.genshinContainer}>
          {/*ito ung labasan ng lahat ng characters! */}
          <img className={style.genshinImageItself} src={imgUrl} alt={name} />
          <h2 className={style.characterName}>{name}</h2>
        </div>
      </Link>
    </>
  );
}

export default GenshinImage;

// const imgUrl = `https://genshin.jmp.blue/characters/${normalizeName(name)}/card`;
//https://genshin.jmp.blue/characters/albedo/card

// function normalizeName(name) {
//   const removeNames = ['Kamisato', 'Kaedehara', 'Sangonomiya', 'Shogun', 'Kujou', 'Traveler'];
//   let normalName = name;

//   for (const rName of removeNames) {
//     //                            Add spaces 👇
//     normalName = normalName.replace(`${rName} `,'');
//     // Change the normalName
//   }

//   return normalName.toLowerCase();
// }

// function normalizeName(name) {
//   let normalName = name;
//   normalName = replaceSpacesWithHyphens(normalName);
//   normalName = replaceKamisato(normalName);
//   normalName = replaceKaedehara(normalName);
//   normalName = replaceShogun(normalName);
//   normalName = replaceSangonomiya(normalName);
//   normalName = replaceKujou(normalName);
//   normalName = replaceTraveler(normalName);

//   return normalName.toLowerCase();
// }

// function replaceSpacesWithHyphens(name) {
//   return name.replace(/\s+/g, "-");
// }

// function replaceKamisato(name) {
//   let newName = name.replace("Kamisato ", "");

//   return newName;
// }

// // function normalizeName(name) {
// //   const noKamisato = removeKamisato(name);
// //   const snakeCase = replaceSpacesWithHyphens(noKamisato);
// //   return snakeCase.toLowerCase();
// // }

// function replaceShogun(name) {
//   let newName = name.replace("Shogun ", "");

//   return newName;
// }

// function replaceSangonomiya(name) {
//   let newName = name.replace("Sangonomiya ", "");
//   return newName;
// }

// function replaceKaedehara(name) {
//   let newName = name.replace("Kaedehara ", "");
//   return newName;
// }

// function replaceKujou(name) {
//   let newName = name.replace("Kujou ", "");
//   return newName;
// }
// function replaceTraveler(name) {
//   let newName = name.replace("Traveler ", "");
//   return newName;
// }
