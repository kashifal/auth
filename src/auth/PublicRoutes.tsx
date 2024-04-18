import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const isLogin: any = useSelector((state: any) => state.authSlice.isLoggedIn);
  const location = useLocation();

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
