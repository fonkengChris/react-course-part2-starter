interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const AuthReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return state + action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default AuthReducer;
