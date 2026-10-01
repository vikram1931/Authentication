import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //Auth functions (signin, signup, logout)

  //session state(userinfo,sign-in status)

  const [session, setSession] = useState(undefined);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
