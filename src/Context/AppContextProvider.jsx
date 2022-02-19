import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("abcdef");

  const handleLogin = (username) => {
    setIsAuth(true);
    setToken(Date.now() + username);
  };

  const value = { isAuth, token, handleLogin };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };

// 1. AppContextProvider component
// 2. created context
// 3. Provider, passed required value into provider
// 4. wrapped the context provider around app.js,
// and passed the entire app as children
// 5. consuming the context in required componetns
// 6. useContext( Context )
// 7. we were able to update state on the context api, it reflected changes in all other components
