import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Profile from "../pages/Profile";
import Statement from "../pages/Statement";
import Layout from "../pages/Layout";
import Withdraw from "../pages/Withdraw";
import Transactions from "../pages/Transactions";
import OpenBets from "../pages/OpenBets";
import Bonus from "../pages/Bonus";
import NotFound from "../components/Error/NotFound";
import NotAvailable from "../components/Error/NotAvailable";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            }, {
                path: '/sports',
                element: <Sports />,
            }, {
                path: '/casino',
                element: <NotAvailable />,
            }, {
                path: '/inplay',
                element: <NotAvailable />,
            }, {
                path: '/user-profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            }, {
                path: '/account-statement',
                element: <PrivateRoute><Statement /></PrivateRoute>,
            }, {
                path: '/withdraw',
                element: <PrivateRoute><Withdraw /></PrivateRoute>,
            }, {
                path: '/transaction-history',
                element: <PrivateRoute><Transactions /></PrivateRoute>,
            }, {
                path: '/bonus-list',
                element: <PrivateRoute><Bonus /></PrivateRoute>,
            }, {
                path: '/open-bets',
                element: <PrivateRoute><OpenBets /></PrivateRoute>,
            }
        ]
    }
])

export default router;