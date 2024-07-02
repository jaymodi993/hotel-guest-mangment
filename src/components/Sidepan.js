import React from "react";

function Sidepan() {
  return (
    <>
      <div>
        <div id="layoutSidenav_nav">
          <nav
            classname="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div classname="sb-sidenav-menu">
              <div classname="nav">
                <div classname="sb-sidenav-menu-heading">Core</div>
                <a classname="nav-link" href="index.html">
                  <div classname="sb-nav-link-icon">
                    <i classname="fas fa-tachometer-alt"></i>
                  </div>
                  <i classname="fas fa-tachometer-alt">Dashboard</i>
                </a>
                <i classname="fas fa-tachometer-alt">
                  <div classname="sb-sidenav-menu-heading">Interface</div>
                  <a
                    classname="nav-link collapsed"
                    href="{#}"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div classname="sb-nav-link-icon">
                      <i classname="fas fa-columns"></i>
                    </div>
                    <i classname="fas fa-columns">
                      Layouts
                      <div classname="sb-sidenav-collapse-arrow">
                        <i classname="fas fa-angle-down"></i>
                      </div>
                      <i classname="fas fa-angle-down"></i>
                    </i>
                  </a>
                  <i classname="fas fa-columns">
                    <i classname="fas fa-angle-down">
                      <div
                        classname="collapse"
                        id="collapseLayouts"
                        aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordion"
                      >
                        <nav classname="sb-sidenav-menu-nested nav">
                          <a classname="nav-link" href="layout-static.html">
                            Static Navigation
                          </a>
                          <a
                            classname="nav-link"
                            href="layout-sidenav-light.html"
                          >
                            Light Sidenav
                          </a>
                        </nav>
                      </div>
                      <a
                        classname="nav-link collapsed"
                        href="{#}"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePages"
                        aria-expanded="false"
                        aria-controls="collapsePages"
                      >
                        <div classname="sb-nav-link-icon">
                          <i classname="fas fa-book-open"></i>
                        </div>
                        <i classname="fas fa-book-open">
                          Pages
                          <div classname="sb-sidenav-collapse-arrow">
                            <i classname="fas fa-angle-down"></i>
                          </div>
                          <i classname="fas fa-angle-down"></i>
                        </i>
                      </a>
                      <i classname="fas fa-book-open">
                        <i classname="fas fa-angle-down">
                          <div
                            classname="collapse"
                            id="collapsePages"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion"
                          >
                            <nav
                              classname="sb-sidenav-menu-nested nav accordion"
                              id="sidenavAccordionPages"
                            >
                              <a
                                classname="nav-link collapsed"
                                href="{#}"
                                data-bs-toggle="collapse"
                                data-bs-target="#pagesCollapseAuth"
                                aria-expanded="false"
                                aria-controls="pagesCollapseAuth"
                              >
                                Authentication
                                <div classname="sb-sidenav-collapse-arrow">
                                  <i classname="fas fa-angle-down"></i>
                                </div>
                                <i classname="fas fa-angle-down"></i>
                              </a>
                              <i classname="fas fa-angle-down">
                                <div
                                  classname="collapse"
                                  id="pagesCollapseAuth"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#sidenavAccordionPages"
                                >
                                  <nav classname="sb-sidenav-menu-nested nav">
                                    <a classname="nav-link" href="login.html">
                                      Login
                                    </a>
                                    <a
                                      classname="nav-link"
                                      href="register.html"
                                    >
                                      Register
                                    </a>
                                    <a
                                      classname="nav-link"
                                      href="password.html"
                                    >
                                      Forgot Password
                                    </a>
                                  </nav>
                                </div>
                                <a
                                  classname="nav-link collapsed"
                                  href="{#}"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#pagesCollapseError"
                                  aria-expanded="false"
                                  aria-controls="pagesCollapseError"
                                >
                                  Error
                                  <div classname="sb-sidenav-collapse-arrow">
                                    <i classname="fas fa-angle-down"></i>
                                  </div>
                                  <i classname="fas fa-angle-down"></i>
                                </a>
                                <i classname="fas fa-angle-down">
                                  <div
                                    classname="collapse"
                                    id="pagesCollapseError"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages"
                                  >
                                    <nav classname="sb-sidenav-menu-nested nav">
                                      <a classname="nav-link" href="401.html">
                                        401 Page
                                      </a>
                                      <a classname="nav-link" href="404.html">
                                        404 Page
                                      </a>
                                      <a classname="nav-link" href="500.html">
                                        500 Page
                                      </a>
                                    </nav>
                                  </div>
                                </i>
                              </i>
                            </nav>
                            <i classname="fas fa-angle-down">
                              <i classname="fas fa-angle-down"></i>
                            </i>
                          </div>
                          <i classname="fas fa-angle-down">
                            <i classname="fas fa-angle-down">
                              <div classname="sb-sidenav-menu-heading">
                                Addons
                              </div>
                              <a classname="nav-link" href="charts.html">
                                <div classname="sb-nav-link-icon">
                                  <i classname="fas fa-chart-area"></i>
                                </div>
                                <i classname="fas fa-chart-area">Charts</i>
                              </a>
                              <i classname="fas fa-chart-area">
                                <a classname="nav-link" href="tables.html">
                                  <div classname="sb-nav-link-icon">
                                    <i classname="fas fa-table"></i>
                                  </div>
                                  <i classname="fas fa-table">Tables</i>
                                </a>
                                <i classname="fas fa-table"></i>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </div>
              <i classname="fas fa-book-open">
                <i classname="fas fa-angle-down">
                  <i classname="fas fa-angle-down">
                    <i classname="fas fa-angle-down">
                      <i classname="fas fa-chart-area">
                        <i classname="fas fa-table"></i>
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </div>
            <i classname="fas fa-book-open">
              <i classname="fas fa-angle-down">
                <i classname="fas fa-angle-down">
                  <i classname="fas fa-angle-down">
                    <i classname="fas fa-chart-area">
                      <i classname="fas fa-table">
                        <div classname="sb-sidenav-footer">
                          <div classname="small">Logged in as:</div>
                          Start Bootstrap
                        </div>
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </nav>
          <i classname="fas fa-book-open">
            <i classname="fas fa-angle-down">
              <i classname="fas fa-angle-down">
                <i classname="fas fa-angle-down">
                  <i classname="fas fa-chart-area">
                    <i classname="fas fa-table"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </div>
        <i classname="fas fa-book-open">
          <i classname="fas fa-angle-down">
            <i classname="fas fa-angle-down">
              <i classname="fas fa-angle-down">
                <i classname="fas fa-chart-area">
                  <i classname="fas fa-table"></i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </div>
    </>
  );
}

export default Sidepan;
