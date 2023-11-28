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
import SuperAdmin from "../components/Admin/Login/SuperAdmin";
import Dashboard from "../pages/Admin/Dashboard";
import Admin from "../components/Admin/Login/Admin";
import PartnerAdmin from "../components/Admin/Login/PartnerAdmin";
import AdminLayout from "../pages/Admin/Layout";
import UserTable from "../components/Admin/Tables/UserTable";
import UserList from "../pages/Admin/UserList";
import AdminList from "../pages/Admin/AdminList";

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
    }, {
        path: '/admin/login',
        element: <Admin />
    }, {
        path: '/partner-admin/login',
        element: <PartnerAdmin />
    }, {
        path: '/super-admin/login',
        element: <SuperAdmin />
    }, {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <AdminLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            }, {
                path: 'users',
                element: <UserList />,
            }, {
                path: 'lists',
                element: <AdminList />,
            },
        ]
    }
])

export default router;  