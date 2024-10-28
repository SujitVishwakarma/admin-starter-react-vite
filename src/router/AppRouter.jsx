import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

const App = lazy(() => import("../App"));
const Landing = lazy(() => import("../_lamdingPage/layout/Landing"));
const Signup = lazy(() => import("../_auth/Signup"));
const Login = lazy(() => import("../_auth/Login"));
const DashboardLayout = lazy(() => import("../_root/DashboardLayout"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const Leads = lazy(() => import("../_root/pages/dashboard/Leads"));
const Settings = lazy(() => import("../_root/pages/dashboard/Settings"));

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Landing />
                    </Suspense>
                ),
                children: [
                    {
                        path: "/",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Signup />
                            </Suspense>
                        ),
                    },
                    {
                        path: "/login",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "/dashboard-layout",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <DashboardLayout />
                    </Suspense>
                ),
                children: [
                    { path: "", element: <Dashboard /> },
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "leads", element: <Leads /> },
                    { path: "settings", element: <Settings /> },
                ],
            },
        ],
    },
]);

export default AppRouter;
