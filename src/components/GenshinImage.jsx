import { Link } from "react-router-dom";
import { alternateImageMap } from "../data";
import style from "./GenshinImage.module.css";
import { useState } from "react";
import fallBackImage from "../assets/paimon.png";

function GenshinImage({ id, name, imageUrl }) {
  return (
    <>
      <Link
        to={`/characters/${id}`}
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
