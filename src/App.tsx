import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Settings from "./pages/Setting.tsx";
import PublicRoutes from "./auth/PublicRoutes.tsx";
import ProtectedRoutes from "./auth/ProtectedRoutes.tsx";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Settings />} path="/settings" />
        </Route>
        <Route path="/" element={<PublicRoutes />}>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
