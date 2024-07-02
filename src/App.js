import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidepan from "./components/Sidepan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="./components/LoginForm" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Footer />
      <Sidepan />
    </>
  );
}

export default App;
