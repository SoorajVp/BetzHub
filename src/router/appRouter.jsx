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
                element: <Profile />,
            }, {
                path: '/account-statement',
                element: <Statement />,
            }, {
                path: '/withdraw',
                element: <Withdraw />,
            }, {
                path: '/transaction-history',
                element: <Transactions />,
            }, {
                path: '/bonus-list',
                element: <Bonus />,
            }, {
                path: '/open-bets',
                element: <OpenBets />,
            }
        ]
    }
])

export default router;