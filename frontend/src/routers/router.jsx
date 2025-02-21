import { createBrowserRouter } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";
import App from "../App";
import Hands_up_excercise from "../pages/excersises/hands_up_excercise";
import { Signin } from "../pages/signin/signin";
import { Signup } from "../pages/signup/signup";
import Leaderboard from "../pages/leaderboard/leaderboard";
import Home from "../pages/home/home"
import Competion from "../pages/competion/competion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/hands-excercise",
        element: <Hands_up_excercise />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard/>
      },
      {
        path: "/competion",
        element: <Competion/>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

export default router;
