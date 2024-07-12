import { useState, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinVideos from "../components/GenshinVideos";
import GenshinVideosFooter from "../components/GenshinVideosFooter";
import style from "./GenshinVideosPage.module.css";

function GenshinVideosPage() {
  const [videos, setVideos] = useState([]);

  const fetchGenshinVideo = async () => {
    // const response = await fetch(`https://genshin.jmp.blue/characters/all`);
    const response = await fetch(`http://localhost:3000/videos`);
    const json = await response.json();

    console.log(json);
    setVideos(json);
  };

  useEffect(() => {
    fetchGenshinVideo();
  }, []);

  return (
    <>
      <div>
        <GenshinHeader />
        <div className={style.allVideos}>
          <div className={style.videosItself}>
            {videos.map((video, index) => (
              <GenshinVideos
                name={video.name}
                videoUrl={video.videoUrl}
                key={index}
              />
            ))}
          </div>
        </div>
        <GenshinVideosFooter />
      </div>
    </>
  );
}

export default GenshinVideosPage;
