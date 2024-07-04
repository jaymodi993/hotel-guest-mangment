import React from "react";

function CustomerAdd() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="card shadow-lg border-0 rounded-lg">
          <div className="card-header">
            <h3 className="text-center font-weight-light my-1">
              Customer Entry
            </h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customername"
                      type="text"
                      placeholder="Enter Customer name"
                    />
                    <label htmlFor="customername">Customer Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="customermobile"
                      type="text"
                      placeholder="Enter Customer Mobile"
                    />
                    <label htmlFor="customermobile">Mobile No.</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customeremail"
                      type="email"
                      placeholder="email@example.com"
                    />
                    <label htmlFor="customeremail">Customer Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      name="customeridtype"
                      className="form-control"
                      id="customeridtype"
                    >
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <input type="" placeholder="Enter Customer Mobile" />
                    <label htmlFor="customermobile">Mobile No.</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Create a password"
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="inputPasswordConfirm"
                      type="password"
                      placeholder="Confirm password"
                    />
                    <label htmlFor="inputPasswordConfirm">
                      Confirm Password
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-0">
                <div className="d-grid">
                  <a className="btn btn-primary btn-block" href="login.html">
                    Create Account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAdd;
