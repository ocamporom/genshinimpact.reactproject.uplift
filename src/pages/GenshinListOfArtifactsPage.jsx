import { useContext, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinListOfArtifacts from "../components/GenshinListOfArtifacts";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useParams } from "react-router-dom";
import GenshinArtifactsFooter from "../components/GenshinArtifactsFooter";

function GenshinListOfArtifactspage() {
  const params = useParams();
  const name = params.name;
  // console.log(name);

  const { artifacts, setArtifacts } = useContext(GenshinAuthContext);


  const fetchArtifacts = async () => {
    const response = await fetch(`https://genshin.jmp.blue/artifacts/all?`);
    const json = await response.json();

    console.log("json", json);
    setArtifacts(json);
  };

  useEffect(() => {
    fetchArtifacts();
  }, []);

  return (
    <>
    <div>
      <GenshinHeader />

      {artifacts.map((artifact, index) => (
        <GenshinListOfArtifacts
          id={artifact.id}
          maxRarity={artifact.max_rarity}
          name={artifact.name}
          twoPieceBonus={artifact["2-piece_bonus"]}
          fourPieceBonus={artifact["4-piece_bonus"]}
          key={index}
        />
      ))}
       <GenshinArtifactsFooter />
      </div>
    </>
  );
}

export default GenshinListOfArtifactspage;
