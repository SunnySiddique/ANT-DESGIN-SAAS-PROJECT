import { Route, Routes } from "react-router-dom";
import AddUser from "../Pages/AddUser/AddUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/login";
import UserGird from "../Pages/UserGrid/UserGird";
import UserProfiles from "../Pages/UserProfile/UserProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/userprofile" element={<UserProfiles />} />
      <Route path="/usergrid" element={<UserGird />} />
      <Route path="/adduser" element={<AddUser />} />
    </Routes>
  );
};

export default AppRoutes;
