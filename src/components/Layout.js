import React from "react";
import { Provider } from "react-redux";
import userStore from "../Store/IndexSlice";
import LandingPage from "./LandingPage";

function Layout() {
  return (
    <Provider store={userStore}>
      <LandingPage />
    </Provider>
  );
}

export default Layout;
