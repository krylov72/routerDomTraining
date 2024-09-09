import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
    RouteObject,
    Outlet,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Abibas } from "../components/pages/Abibas";
import { Puma } from "../components/pages/Puma";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";

import { Login } from "../components/pages/Login";
import { ProtectedPage } from "../components/pages/ProtectedPage";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED_PAGE: '/admin',
    ERROR_PAGE: '/404',
    LOGIN: '/login'
} as const

type Props = {
    children:React.ReactNode
}

export const PrivateRoutes = () => {
    const isAuth = true
    return (
        <div>
            {isAuth ? <Outlet />: <Navigate to={PATH.LOGIN} />}
        </div>
    )
};


const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas />,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />
    },
    {
        path: PATH.PUMA,
        element: <Puma />
    },
    {
        path: PATH.PRICES,
        element: <Prices />
    },
    {
        path: PATH.MODEL,
        element: <Model />
    },
    {
        path: PATH.LOGIN,
        element: <Login />
    },
    {
        path:'/',
        element:<Navigate to={PATH.ADIDAS} />
    }
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element:
            <ProtectedPage />
    },
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Navigate to={PATH.ERROR_PAGE} />,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes
        ]
    },
    {
        path: PATH.ERROR_PAGE,
        element: <Error404 />
    }

]);