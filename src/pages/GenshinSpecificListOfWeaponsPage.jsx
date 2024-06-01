import GenshinHeader from './components/GenshinHeader'


function GenshinSpecificListOfWeaponsPage() {

  const params = useParams();
  const name = params.name;
  // console.log(name);
  
  const { weapons, setWeapons } = useContext(GenshinAuthContext);
  // const [weapons, setWeapons] = useState([]);

  const fetchWeapons = async () => {
    const response = await fetch(`https://genshin.jmp.blue/weapons/all?`);
    const json = await response.json();

    console.log("json", json);
    setWeapons(json);
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  const filteredWeapons = weapons.filter(weapon => weapon.type === name);
  return (
   <>
   <GenshinHeader/>

   <div className={style.allWeapons}>
      {filteredWeapons.map((weapon, index) => (
        <GenshinListOfWeapons
          id={weapon.id}
          type={weapon.type}
          rarity={weapon.rarity}
          subStat={weapon.subStat}
          passiveDesc={weapon.passiveDesc}
          name={weapon.name}
          key={index}
        />
      ))}
      </div>


  </> );
}

export default GenshinSpecificListOfWeaponsPage;