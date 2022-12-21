import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Shoaib-Rasheed",
    age: 21,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

//Custom Hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };