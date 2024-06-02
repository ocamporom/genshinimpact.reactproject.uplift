import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GenshinMainPage from "./pages/GenshinMainPage";
import GenshinCharacterDetails from "./pages/GenshinCharacterDetailsPage";
import GenshinListOfWeaponsPage from "./pages/GenshinListOfWeaponsPage";
// import GenshinAuthContext from "./contexts/GenshinAuthContext";
import GenshinAuthProvider from "./contexts/GenshinAuthProvider";
import GenshinListOfArtifactspage from "./pages/GenshinListOfArtifactsPage";
import GenshinSpecificListOfWeaponsPage from "./pages/GenshinSpecificListOfWeaponsPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <GenshinMainPage />, //ito ang main pag na selection ng characters.
  },
  {
    path: "/characters/:name", // dito kukunin ung buong details nila..oneng dun sa API ng genshin,,wala sya property so first word nangyari..
    //do not forget ung :
    element: <GenshinCharacterDetails />,
  },
  {
    path: "/weapons",
    element: <GenshinListOfWeaponsPage />,
  }, ///last added 052924
  {
    path: "/artifacts",
    element: <GenshinListOfArtifactspage />,
  },
  {
    path: "/weapons/specific/:name",
    element: <GenshinSpecificListOfWeaponsPage />, //ADDED 060224
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
