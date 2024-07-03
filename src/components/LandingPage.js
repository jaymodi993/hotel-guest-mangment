import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import Sidepan from './Sidepan';
import Footer from './Footer';
import {useSelector} from "react-redux";


export default function LandingPage() {
    
    const {isUserAuthenticated} = useSelector(store => store.userSlice);

  return (
    <>
    if(isUserAuthenticated == true) {

      <LoginForm />
    }
    else {
    <div className="sb-nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <Sidepan />
          <div id="layoutSidenav_content">
            <Footer />
          </div>
        </div>
      </div>
    }
    </>
  )
}
