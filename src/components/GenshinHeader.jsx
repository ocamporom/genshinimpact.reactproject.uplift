import style from "./GenshinHeader.module.css";

function GenshinHeader() {
  const backgroundUrl =
    "https://logowik.com/content/uploads/images/genshin-impact4958.jpg";
  return (
    <>
      <header>
        <div className={style.header}>
          <img className={style.image} src={backgroundUrl} alt="background" />
        </div>
      </header>
    </>
  );
}

export default GenshinHeader;
