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
                      type="number"
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
                      <option value="Adhar Card">Adhar Card</option>
                      <option value="Pan Card">Pan Card</option>
                      <option value="Passport">Passport</option>
                      <option value="Driving Licence">Driving Licence</option>
                    </select>
                    <label htmlFor="customeridtype">Customer ID Type</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="idproofnumber"
                      type="text"
                      placeholder="Enter ID Proof Number"
                    />
                    <label htmlFor="idproofnumber">ID Proof Number</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="customerarea"
                      type="text"
                      placeholder="Enter Customer Area"
                    />
                    <label htmlFor="customerarea">Area</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercity"
                      type="text"
                      placeholder="Enter Your City Name"
                    />
                    <label htmlFor="customercity">City</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerstate"
                      type="text"
                      placeholder="Enter Your State Name"
                    />
                    <label htmlFor="customerstate">State</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercountry"
                      type="text"
                      placeholder="Enter Your Country Name"
                    />
                    <label htmlFor="customercountry">Country</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerroomno"
                      type="number"
                      placeholder="Enter Your Room No."
                    />
                    <label htmlFor="customerroomno">Room No.</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercheckindatetime"
                      type="datetime-local"
                      placeholder="Enter Your Check-Out Date & Time"
                    />
                    <label htmlFor="customercheckindatetime">Check-In Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercheckoutdatetime"
                      type="datetime-local"
                      placeholder="Enter Your Check-Out Date & Time"
                    />
                    <label htmlFor="customercheckoutdatetime">Check-Out Date & Time</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerguestno"
                      type="number"
                      placeholder="Enter No. of Guest"
                    />
                    <label htmlFor="customerguestno">No. Of Guest</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerchildrenno"
                      type="number"
                      placeholder="Enter No. of Children"
                    />
                    <label htmlFor="customerchildrenno">No. Of Children</label>
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
