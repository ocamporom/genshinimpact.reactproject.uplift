import style from "./GenshinVideos.module.css";
import PropTypes from "prop-types";

function GenshinVideos({ name, videoUrl }) {
  return (
    <>
      {" "}
      <div className={style.gridVideos}>
        <div className={style.videoIframe}>
          <div className={style.video}>
            {" "}
            <iframe
              width="500"
              height="400"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
             
            />
          </div>
          <div className={style.videoName}>{name}</div>
        </div>
      </div>

      
    </>
  );
}

GenshinVideos.propTypes = {
  videoUrl: PropTypes.string.isRequired
};

export default GenshinVideos;
