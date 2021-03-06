import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  rootElement
);
