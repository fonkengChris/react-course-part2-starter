import React, { ReactNode, useReducer } from "react";
import AuthReducer from "./reducers/AuthReducer";
import AuthContext from "./contexts/authContext";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(AuthReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;