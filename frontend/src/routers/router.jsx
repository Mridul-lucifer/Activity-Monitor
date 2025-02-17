import { createBrowserRouter } from "react-router-dom"
import Challenges from "../pages/challenges/Challenges";
import App from "../App";
import Hands_up_excercise from "../pages/excersises/hands_up_excercise";
const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        children : [
            {
                path : "/challenges",
                element : <Challenges/>
            },
            {
                path : "/hands-excercise",
                element : <Hands_up_excercise/>
            }
        ]
    },
])

export default router;