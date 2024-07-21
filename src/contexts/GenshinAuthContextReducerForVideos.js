// import { useReducer } from "react";


// function GenshinAuthContextReducerForVideos(state, action) {
//   if (action.type === "ADD_VIDEOS") {
    
//     const videosToAdd = Array.isArray(action.payload) ? action.payload : [];
//     return {
//       ...state,
//       fetchedVideos: [...videosToAdd], 
//       videos: [...videosToAdd], 
//     };
//   }

//   if (action.type === "FILTER_VIDEOS") {
//     const videoName = action.payload.toLowerCase();
//     const filteredVideos = state.fetchedVideos.filter((video) => {
//       return video.name.toLowerCase().startsWith(videoName);
//     });

//     return {
//       ...state,
//       videos: filteredVideos,
//     };
//   }

//   return state;
// }

// const useGenshinAuthContextReducerForVideos = () => {
//   return useReducer(GenshinAuthContextReducerForVideos, {
//     characters: [],
//     weapons: [],
//     artifacts: [],
//     videos: [],
//     fetchedVideos: []
//   });
// };

// export default useGenshinAuthContextReducerForVideos;



import { useReducer } from "react";

function GenshinAuthContextReducerForVideos(state, action) {
  if (action.type === "ADD_VIDEOS") {
    // console.log('add videos', action.payload);
    return {
      ...state,
      fetchedVideos: [...action.payload],
      videos: [...action.payload],
    };
  }

  if (action.type === "FILTER_VIDEOS") {
    const videoName = action.payload.toLowerCase();
    // console.log('fetchedVideos: ', state.fetchedVideos)
    const filteredVideos = state.fetchedVideos.filter((video) => {
      return video.name.toLowerCase().startsWith(videoName);
    });

    return {
      ...state,
      videos: filteredVideos,
    };
  }

  return state;
}

const useGenshinAuthContextReducerForVideos = () => {
  return useReducer(GenshinAuthContextReducerForVideos, {
    characters: [],
    weapons: [],
    artifacts: [],
    videos: [],
    fetchedVideos: []
  });
};

export default useGenshinAuthContextReducerForVideos;