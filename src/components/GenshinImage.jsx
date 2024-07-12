import { Link } from "react-router-dom";
import { alternateImageMap } from "../data";
import style from "./GenshinImage.module.css";
import { useState } from "react";
import fallBackImage from '../assets/paimon.png'


function GenshinImage({ name, imageUrl }) {
  // const slug = alternateImageMap[name]
  //   ? alternateImageMap[name]
  //   : name.toLowerCase();

  // const imgUrl =
  //   name === "Traveler"
  //     ? "https://assetsio.gnwcdn.com/genshin-impact-traveler.jpg?width=880&quality=80&format=jpg&auto=webp"
  //     : `https://genshin.jmp.blue/characters/${slug}/card`;

  //     const [imageUrl, setImageUrl] = useState(`${imgUrl}`);

  // const handleImageError = () => {
  //   // Logic to handle image loading error
  //   setImageUrl('../assets/fallback-image.png');

  

  return (
    <>
      <Link
        to={`/characters/${name}`}
        onClick={() => {
          console.log("Link clicked");
        }}
      >
        <div className={style.genshinContainer}>
          <div className={style.genshinImageItselfContainer}>
            <img
              className={style.genshinImageItself}
              src={imageUrl}
              alt={name}
              // style={{objectFit:'contain'}}
              // onError={handleImageError}
              onError={(e) => {
                e.target.src = fallBackImage; // Set fallback image on error
              }}
            />
          </div>
          <h2 className={style.characterName}>{name}</h2>
        </div>
      </Link>
    </>
  );
}


export default GenshinImage;
