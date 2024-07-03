import React from "react";
import { Provider } from "react-redux";
import UserStore from "../src/Store/IndexSlice";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <Provider store={UserStore}>
      <LandingPage/>
    </Provider>

  );
}

export default App;
