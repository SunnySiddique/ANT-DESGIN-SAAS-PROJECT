// DrawerContext.js
import React, { createContext, useContext } from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <DrawerContext.Provider value={{ drawerVisible, showDrawer, hideDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};
