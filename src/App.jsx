import React, { useState } from 'react';
import { Route, Routes, useLocation, } from 'react-router-dom';
import Login from './Components/Pages/Login/login';
import Register from './Components/Pages/Register/Register';
import SideMenu from './Components/SideMenu/SideMenu';

export const Context = React.createContext();


const App = () => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Array of paths where SideMenu should not be shown
  const excludedPaths = ['/register', '/'];

  // Check if the current route is not in the excludedPaths
  const showSideMenu = !excludedPaths.includes(location.pathname);

  return (
    <Context.Provider value={{drawerVisible, setDrawerVisible}}>
      {showSideMenu && <SideMenu drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />}
      <Routes>
        {/* <Route path="/home" element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;