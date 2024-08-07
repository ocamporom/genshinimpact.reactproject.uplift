import { useContext, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinListOfArtifacts from "../components/GenshinListOfArtifacts";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useParams } from "react-router-dom";
import GenshinArtifactsFooter from "../components/GenshinArtifactsFooter";
import GenshinArtifactsSearchFunctionality from "../components/GenshinArtifactsSearchFunctionality";

function GenshinListOfArtifactspage() {
  const params = useParams();
  const name = params.name;

  const { stateArtifacts, dispatchArtifacts } = useContext(GenshinAuthContext);

  const fetchArtifacts = async () => {
    // const response = await fetch(`https://genshin.jmp.blue/artifacts/all?`);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/artifacts`);
    const json = await response.json();

    console.log("json", json);
    // setArtifacts(json);
    dispatchArtifacts({
      type: "ADD_ARTIFACTS",
      payload: json,
    });
  };

  useEffect(() => {
    fetchArtifacts();
  }, []);

  return (
    <>
      <div>
        <GenshinHeader />
        <GenshinArtifactsSearchFunctionality />

        {stateArtifacts.artifacts.map((artifact, index) => (
          <GenshinListOfArtifacts
            id={artifact.id}
            artifactUrl1={artifact.artifactUrl1}
            artifactUrl2={artifact.artifactUrl2}
            artifactUrl3={artifact.artifactUrl3}
            artifactUrl4={artifact.artifactUrl4}
            artifactUrl5={artifact.artifactUrl5}
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
