import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sports from "../pages/Sports";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }, {
        path: '/sports',
        element: <Sports />
    }
])

export default router;