import React from "react";
import UserContextProvider from "./context/UserContextProvider.jsx";
import RouteMe from "./routes/RouteMe.jsx";
const App = () => {
  return (
    <UserContextProvider>
      <RouteMe />
    </UserContextProvider>
  );
};

export default App;
