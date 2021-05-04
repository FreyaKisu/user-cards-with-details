import { createContext, useContext, useState, useEffect } from "react";
import { getUsers } from "../lib/apiCalls";

const AppContext = createContext(null);

const handleGets = async () => {
  const users = await getUsers();

  return {
    users,
  };
};

export function AppWrapper({ children }) {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    handleGets().then((r) => {
      setState(r);
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
