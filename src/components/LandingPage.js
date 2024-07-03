import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import Sidepan from './Sidepan';
import Footer from './Footer';
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';


export default function LandingPage() {
  const { isUserAuthenticated } = useSelector(store => store.userSlice);

  return (
      isUserAuthenticated===true ?
        <div className="sb-nav-fixed">
          <Header />
          <div id="layoutSidenav">
            <Sidepan />
            <div id="layoutSidenav_content">
              <Outlet/>
              <Footer />
            </div>
          </div>
        </div>
     :
         <LoginForm />
  )
}
