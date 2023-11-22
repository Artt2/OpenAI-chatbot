import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  //functions that take params, which dont return values but Promise objects that will be resolved
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>
}

//createContext returns an object holding Provider and Consumer
const AuthContext = createContext<UserAuth | null>(null);

//destructured props: children, type is ReactNode
//ReactNode is a type representing any valid React content
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //this is run after initial render,

  useEffect(() => {

  }, []); //empty dependencies, only used when component is rendered for the first time

  const login = async (email: string, password: string) => {
      
  };

  const signup = async(name: string, email: string, password: string) => {

  };

  const logout = async () => {

  };

  const value = { //contains everything needed to interact with this context
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  //returns the AuthContext's Provider
  //wraps the children inside it
  //value is set, which is returned for use by "useContext(AuthContext)""
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export { AuthContext, AuthProvider };