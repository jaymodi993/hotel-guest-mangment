import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerList from "./components/CustomerList";
import CustomerAdd from "./components/CustomerAdd";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='/' element={<CustomerList></CustomerList>}></Route>
          <Route path='add-customer' element={<CustomerAdd></CustomerAdd>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
