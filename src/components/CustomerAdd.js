import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CustomerAction } from "../Store/IndexSlice";

function CustomerAdd() {
  // const { CustomerObj = {} } = useSelector((store) => store.customerSlice);
  const dispatch = useDispatch();
  const cName = useRef("");
  const cEmail = useRef("");
  const cMobile = useRef("");
  const cRoomNo = useRef("");
  const cIdType = useRef("");
  const cIdNo = useRef("");
  const cArea = useRef("");
  const cCity = useRef("");
  const cState = useRef("");
  const cCountry = useRef("");
  const cCheckInDate = useRef("");
  const cCheckOutDate = useRef("");
  const cGuest = useRef("");
  const cChild = useRef("");

  useEffect(() => {
    cName.current.valueOf = "";
    cEmail.current.valueOf = "";
    cMobile.current.valueOf = "";
    cRoomNo.current.valueOf = "";
    cIdType.current.valueOf = "";
    cIdNo.current.valueOf = "";
    cArea.current.valueOf = "";
    cCity.current.valueOf = "";
    cState.current.valueOf = "";
    cCountry.current.valueOf = "";
    cCheckInDate.current.valueOf = "";
    cCheckOutDate.current.valueOf = "";
    cGuest.current.valueOf = "";
    cChild.current.valueOf = "";
  }, []);

  function submitCustomer(e) {
    e.preventDefault();
    const customername = cName.current.valueOf;
    const customeremail = cEmail.current.valueOf;
    const customermobile = cMobile.current.valueOf;
    const customerroomno = cRoomNo.current.valueOf;
    const customeridtype = cIdType.current.valueOf;
    const idproofnumber = cIdNo.current.valueOf;
    const customerarea = cArea.current.valueOf;
    const customercity = cCity.current.valueOf;
    const customerstate = cState.current.valueOf;
    const customercountry = cCountry.current.valueOf;
    const customercheckindatetime = cCheckInDate.current.valueOf;
    const customercheckoutdatetime = cCheckOutDate.current.valueOf;
    const customerguestno = cGuest.current.valueOf;
    const customerchildrenno = cChild.current.valueOf;

    cName.current.valueOf = "";
    cEmail.current.valueOf = "";
    cMobile.current.valueOf = "";
    cRoomNo.current.valueOf = "";
    cIdType.current.valueOf = "";
    cIdNo.current.valueOf = "";
    cArea.current.valueOf = "";
    cCity.current.valueOf = "";
    cState.current.valueOf = "";
    cCountry.current.valueOf = "";
    cCheckInDate.current.valueOf = "";
    cCheckOutDate.current.valueOf = "";
    cGuest.current.valueOf = "";
    cChild.current.valueOf = "";

    dispatch(
      CustomerAction.addCustomer({
        body: {
          CustomerName: customername,
          CustomerEmail: customeremail,
          CustomerMobile: customermobile,
          CustomerRoomNo: customerroomno,
          CustomerIdType: customeridtype,
          IdProofNumber: idproofnumber,
          CustomerArea: customerarea,
          CustomerCity: customercity,
          CustomerState: customerstate,
          CustomerCountry: customercountry,
          CustomerCheckInDateTime: customercheckindatetime,
          CustomerCheckOutDateTime: customercheckoutdatetime,
          CustomerGuestNo: customerguestno,
          CustomerChildrenNo: customerchildrenno,
        },
      })
    );
  }

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
            <form onSubmit={submitCustomer}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customername"
                      type="text"
                      placeholder="Enter Customer name"
                      ref={cName}
                    />
                    <label htmlFor="customername">Customer Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="customeremail"
                      type="email"
                      placeholder="email@example.com"
                      ref={cEmail}
                    />
                    <label htmlFor="customeremail">Customer Email</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customermobile"
                      type="number"
                      placeholder="Enter Customer Mobile"
                      ref={cMobile}
                    />
                    <label htmlFor="customermobile">Mobile No.</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="customerroomno"
                      type="number"
                      placeholder="Enter Your Room No."
                      ref={cRoomNo}
                    />
                    <label htmlFor="customerroomno">Room No.</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <select
                      name="customeridtype"
                      className="form-control"
                      id="customeridtype"
                      ref={cIdType}
                    >
                      <option value="Adhar Card">Adhar Card</option>
                      <option value="Pan Card">Pan Card</option>
                      <option value="Passport">Passport</option>
                      <option value="Driving Licence">Driving Licence</option>
                    </select>
                    <label htmlFor="customeridtype">Customer ID Type</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="idproofnumber"
                      type="text"
                      placeholder="Enter ID Proof Number"
                      ref={cIdNo}
                    />
                    <label htmlFor="idproofnumber">ID Proof Number</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerarea"
                      type="text"
                      placeholder="Enter Customer Area"
                      ref={cArea}
                    />
                    <label htmlFor="customerarea">Area</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercity"
                      type="text"
                      placeholder="Enter Your City Name"
                      ref={cCity}
                    />
                    <label htmlFor="customercity">City</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customerstate"
                      type="text"
                      placeholder="Enter Your State Name"
                      ref={cState}
                    />
                    <label htmlFor="customerstate">State</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercountry"
                      type="text"
                      placeholder="Enter Your Country Name"
                      ref={cCountry}
                    />
                    <label htmlFor="customercountry">Country</label>
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
                      ref={cCheckInDate}
                    />
                    <label htmlFor="customercheckindatetime">
                      Check-In Date & Time
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="customercheckoutdatetime"
                      type="datetime-local"
                      placeholder="Enter Your Check-Out Date & Time"
                      ref={cCheckOutDate}
                    />
                    <label htmlFor="customercheckoutdatetime">
                      Check-Out Date & Time
                    </label>
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
                      ref={cGuest}
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
                      ref={cChild}
                    />
                    <label htmlFor="customerchildrenno">No. Of Children</label>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-0">
                <div className="d-grid">
                  <button className="btn btn-primary btn-block" type="submit">
                    Add Customer
                  </button>
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
