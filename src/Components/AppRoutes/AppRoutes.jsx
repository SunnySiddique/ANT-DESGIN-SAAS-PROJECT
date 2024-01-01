import { Route, Routes } from "react-router-dom";
import AddUser from "../Pages/AddUser/AddUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import UserGird from "../Pages/UserGrid/UserGird";
import UserProfile from "../Pages/UserProfile/UserProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/usergrid" element={<UserGird />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
