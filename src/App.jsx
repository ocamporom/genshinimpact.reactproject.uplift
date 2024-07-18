import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GenshinMainPage from "./pages/GenshinMainPage";
import GenshinCharacterDetails from "./pages/GenshinCharacterDetailsPage";
import GenshinListOfWeaponsPage from "./pages/GenshinListOfWeaponsPage";

import GenshinAuthProvider from "./contexts/GenshinAuthProvider";
import GenshinListOfArtifactspage from "./pages/GenshinListOfArtifactsPage";
import GenshinSpecificListOfWeaponsPage from "./pages/GenshinSpecificListOfWeaponsPage";
import GenshinVideosPage from "./pages/GenshinVideosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenshinMainPage />,
  },
  {
    path: "/characters/:id",
    element: <GenshinCharacterDetails />,
  },
  {
    path: "/weapons",
    element: <GenshinListOfWeaponsPage />,
  },
  {
    path: "/artifacts",
    element: <GenshinListOfArtifactspage />,
  },
  {
    path: "/weapons/specific/:name",
    element: <GenshinSpecificListOfWeaponsPage />,
  },
  {
    path: "/videos",
    element: <GenshinVideosPage />,
  },
]);

function App() {
  return (
    <>
      <GenshinAuthProvider>
        <RouterProvider router={router} />
      </GenshinAuthProvider>
    </>
  );
}

export default App;
