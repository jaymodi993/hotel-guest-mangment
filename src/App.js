import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidepan from "./components/Sidepan";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    // <LoginForm/>
    <div className="sb-nav-fixed">
      <Header />
      <div id="layoutSidenav">
        <Sidepan />
        <div id="layoutSidenav_content">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
