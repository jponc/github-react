import React from "react";
import { Main } from "./Main";
import { AppProviders } from "./context/AppContext";

const App = () => (
  <AppProviders>
    <Main />
  </AppProviders>
);

export default App;
