import style from "./GenshinSearchFunctionality.module.css";
import { alternateImageMap } from "../data";

function GenshinSearchFunctionality() {
  const [search, setSearch] = useState("");



  return (
    <>
      <div className={style.searchFieldContainer}>
        <input
          className={style.searchField}
          type="search"
          placeholder="Character Name here!"
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <div className={style.searchButton}>
          <button type="submit">Search</button>
        </div>
      </div>
    </>
  );
}

export default GenshinSearchFunctionality;
