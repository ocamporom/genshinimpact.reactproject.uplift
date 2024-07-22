import { useState, useEffect } from "react";
import GenshinHeader from "../components/GenshinHeader";
import GenshinVideos from "../components/GenshinVideos";
import GenshinVideosFooter from "../components/GenshinVideosFooter";
import GenshinVideoSearchFunctionality from "../components/GenshinVideoSearchFunctionality";
import style from "./GenshinVideosPage.module.css";
import GenshinAuthContext from "../contexts/GenshinAuthContext";
import { useContext } from "react";

function GenshinVideosPage() {
  const { stateVideos, dispatchVideos } = useContext(GenshinAuthContext);

  const fetchGenshinVideo = async () => {
    // const response = await fetch(`http://localhost:3000/videos`);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/videos`);
    const json = await response.json();

    console.log(json);

    dispatchVideos({
      type: "ADD_VIDEOS",
      payload: json,
    });
  };

  useEffect(() => {
    fetchGenshinVideo();
  }, []);

  return (
    <>
      <div>
        <GenshinHeader />
         <GenshinVideoSearchFunctionality />

        <div className={style.allVideos}>
          <div className={style.videosItself}>
            {stateVideos.videos.map((video, index) => (
              <GenshinVideos
                // key={video.id}
                key={index}
                name={video.name}
                videoUrl={video.videoUrl}

                // id={video.id}
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

// import { useState, useEffect } from "react";
// import GenshinHeader from "../components/GenshinHeader";
// import GenshinVideos from "../components/GenshinVideos";
// import GenshinVideosFooter from "../components/GenshinVideosFooter";
// import style from "./GenshinVideosPage.module.css";
// import GenshinVideoSearchFunctionality from "../components/GenshinVideoSearchFunctionality";

// function GenshinVideosPage() {
//   const [videos, setVideos] = useState([]);

//   const fetchGenshinVideo = async () => {
//     // const response = await fetch(`https://genshin.jmp.blue/characters/all`);
//     const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/videos`);
//     const json = await response.json();

//     console.log(json);
//     setVideos(json);
//   };

//   useEffect(() => {
//     fetchGenshinVideo();
//   }, []);

//   return (
//     <>
//       <div>
//         <GenshinHeader />
//         <GenshinVideoSearchFunctionality />
//         <div className={style.allVideos}>
//           <div className={style.videosItself}>
//             {videos.map((video, index) => (
//               <GenshinVideos
//                 name={video.name}
//                 videoUrl={video.videoUrl}
//                 key={index}
//               />
//             ))}
//           </div>
//         </div>
//         <GenshinVideosFooter />
//       </div>
//     </>
//   );
// }

// export default GenshinVideosPage;

// import React, { useEffect, useContext } from "react";
// import GenshinHeader from "../components/GenshinHeader";
// import GenshinVideos from "../components/GenshinVideos";
// import GenshinVideosFooter from "../components/GenshinVideosFooter";
// import GenshinCharacterSearchFunctionality from "../components/GenshinCharacterSearchFunctionality";
// import style from "./GenshinVideosPage.module.css";
// import GenshinAuthContext from "../contexts/GenshinAuthContext";

// function GenshinVideosPage() {
//   const { stateVideos, dispatchVideos } = useContext(GenshinAuthContext);

//   useEffect(() => {
//     const fetchGenshinVideo = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/videos`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch videos");
//         }
//         const json = await response.json();
//         dispatchVideos({
//           type: "ADD_VIDEOS",
//           payload: json,
//         });
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//         // Handle error state or retry mechanism if needed
//       }
//     };

//     fetchGenshinVideo();
//   }, [dispatchVideos]);

//   return (
//     <>
//       <div>
//         <GenshinHeader />
//         <GenshinCharacterSearchFunctionality />
//         <div className={style.allVideos}>
//           <div className={style.videosItself}>
//             {stateVideos.videos && stateVideos.videos.length > 0 ? (
//               stateVideos.videos.map((video) => (
//                 <GenshinVideos
//                   key={video.id} // Use a unique identifier from your video data
//                   name={video.name}
//                   videoUrl={video.videoUrl}
//                 />
//               ))
//             ) : (
//               <p>No videos available</p>
//             )}
//           </div>
//         </div>
//         <GenshinVideosFooter />
//       </div>
//     </>
//   );
// }

// export default GenshinVideosPage;

// import { useState, useEffect } from "react";
// import GenshinHeader from "../components/GenshinHeader";
// import GenshinVideos from "../components/GenshinVideos";
// import GenshinVideosFooter from "../components/GenshinVideosFooter";
// import GenshinVideoSearchFunctionality from "../components/GenshinVideoSearchFunctionality";
// import style from "./GenshinVideosPage.module.css";
// import GenshinAuthContext from "../contexts/GenshinAuthContext";
// import { useContext } from "react";
// import GenshinPagination from "../components/GenshinPagination";

// function GenshinVideosPage() {
//   const { stateVideos, dispatchVideos } = useContext(GenshinAuthContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage] = useState(5);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);

//     console.log(`Page ${page} clicked`);
//   };

//   // console.log('stateVideos: ', stateVideos);
//   // const [videos, setVideos] = useState([]);

//   const fetchGenshinVideo = async () => {
//     // const response = await fetch(`https://genshin.jmp.blue/characters/all`);
//     const response = await fetch(`http://localhost:3000/videos`);
//     const json = await response.json();

//     console.log(json);
//     // setVideos(json);

//     // setVideos(json)

//     dispatchVideos({
//       type: "ADD_VIDEOS",
//       payload: json,
//     });
//   };

//   useEffect(() => {
//     fetchGenshinVideo();
//   }, []);

//   const indexOfLastPost = currentPage * postPerPage
//   const indexOfFirstPost = indexOfLastPost - postPerPage
//   const currentPosts = posts

//   return (
//     <>
//       <div>
//         <GenshinHeader />

//         <GenshinVideoSearchFunctionality />
//         <div className="App">
//           <GenshinPagination
//             currentPage={currentPage}
//             postPerPage={postPerPage}
//             onPageChange={handlePageChange}
//           />
//         </div>
//         <div className={style.allVideos}>
//           <div className={style.videosItself}>
//             {stateVideos.videos.map((video, index) => (
//               <GenshinVideos
//                 // key={video.id}
//                 key={index}
//                 name={video.name}
//                 videoUrl={video.videoUrl}

//                 // id={video.id}
//               />
//             ))}
//           </div>
//         </div>
//         <GenshinVideosFooter />
//       </div>
//     </>
//   );
// }

// export default GenshinVideosPage;
