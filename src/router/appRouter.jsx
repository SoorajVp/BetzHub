import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import App from "../App";
import ErrorPage from "../components/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },{
                path: '/sports',
                element: <Sports />,
            }
        ]
    }, 
])

export default router;