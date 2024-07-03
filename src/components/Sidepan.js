import React from "react";
import { NavLink } from "react-router-dom";

function Sidepan() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link" >
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              <NavLink to="/">Customer List</NavLink>
            </a>
            <a className="nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              <NavLink to="add-customer">Customer Add</NavLink>
            </a>
            </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
}

export default Sidepan;
