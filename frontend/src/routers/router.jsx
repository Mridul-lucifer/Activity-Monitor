import { createBrowserRouter } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";
import App from "../App";
import Hands_up_excercise from "../pages/excersises/hands_up_excercise";
import { Signin } from "../pages/signin/signin";
import { Signup } from "../pages/signup/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/hands-excercise",
        element: <Hands_up_excercise />,
      },
    ],
  },
]);

export default router;
