import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import ErrorPage from "../components/Error/ErrorPage";
import Profile from "../pages/Profile";
import Statement from "../pages/Statement";
import Layout from "../pages/Layout";
import Withdraw from "../pages/Withdraw";
import Transactions from "../pages/Transactions";
import OpenBets from "../pages/OpenBets";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            }, {
                path: '/sports',
                element: <Sports />,
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
                element: <Profile />,
            }, {
                path: '/open-bets',
                element: <OpenBets />,
            }
        ]
    }
])

export default router;