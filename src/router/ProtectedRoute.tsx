import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import { Error404 } from "../components/pages/Error404";
import { PATH } from "./Router";
type Props = {
    children: ReactNode
}
export const ProtectedRoute = ({children}:Props) => {
   const logged = false
   return (
    <div>
        {logged? children:<Navigate to={PATH.LOGIN} />}
    </div>
   )
};