import React from "react";
import { useEffect, useRef,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { CustomerAction } from "../Store/IndexSlice";
import { useNavigate } from "react-router-dom";


function CustomerAdd() {
  const {CustomerObj} = useSelector((store) => store.customerSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  
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
    if(CustomerObj.cName == null) {
    cName.current.value = "";
    cEmail.current.value = "";
    cMobile.current.value = "";
    cRoomNo.current.value = "";
    cIdType.current.value = "";
    cIdNo.current.value = "";
    cArea.current.value = "";
    cCity.current.value = "";
    cState.current.value = "";
    cCountry.current.value = "";
    cCheckInDate.current.value = "";
    cCheckOutDate.current.value = "";
    cGuest.current.value = "";
    cChild.current.value = "";
    setIsEdit(false);
  }else{
    cName.current.value = CustomerObj.cName;
    cEmail.current.value = CustomerObj.cEmail;
    cMobile.current.value = CustomerObj.cMobile;
    cRoomNo.current.value = CustomerObj.cRoomNo;
    cIdType.current.value = CustomerObj.cIdType;
    cIdNo.current.value = CustomerObj.cIdNo;
    cArea.current.value = CustomerObj.cArea;
    cCity.current.value = CustomerObj.cCity;
    cState.current.value = CustomerObj.cState;
    cCountry.current.value = CustomerObj.cCountry;
    cCheckInDate.current.value = CustomerObj.cCheckInDate;
    cCheckOutDate.current.value = CustomerObj.cCheckOutDate;
    cGuest.current.value = CustomerObj.cGuest;
    cChild.current.value = CustomerObj.cChild;
    setIsEdit(true);
  
  }
}, []);

  function submitCustomer(e) {
    debugger
    e.preventDefault();
    const customername = cName.current.value;
    const customeremail = cEmail.current.value;
    const customermobile = cMobile.current.value;  
    const customerroomno = cRoomNo.current.value;
    const customeridtype = cIdType.current.value;
    const idproofnumber = cIdNo.current.value;
    const customerarea = cArea.current.value;
    const customercity = cCity.current.value;
    const customerstate = cState.current.value;
    const customercountry = cCountry.current.value;
    const customercheckindatetime = cCheckInDate.current.value;
    const customercheckoutdatetime = cCheckOutDate.current.value;
    const customerguestno = cGuest.current.value;
    const customerchildrenno = cChild.current.value;

    cName.current.value = "";
    cEmail.current.value = "";
    cMobile.current.value = "";
    cRoomNo.current.value = "";
    cIdType.current.value = "";
    cIdNo.current.value = "";
    cArea.current.value = "";
    cCity.current.value = "";
    cState.current.value = "";
    cCountry.current.value = "";
    cCheckInDate.current.value = "";
    cCheckOutDate.current.value = "";
    cGuest.current.value = "";
    cChild.current.value = "";

     if(isEdit) {
      dispatch(
        CustomerAction.addCustomer({
          body: {
            'CustomerName': customername,
           'CustomerEmail': customeremail,
            'CustomerMobile': customermobile,
            'CustomerRoomNo': customerroomno,
            'CustomerIdType': customeridtype,
            'IdProofNumber': idproofnumber,
            'CustomerArea': customerarea,
            'CustomerCity': customercity,
            'CustomerState': customerstate,
            'CustomerCountry': customercountry,
            'CustomerCheckInDateTime': customercheckindatetime,
            'CustomerCheckOutDateTime': customercheckoutdatetime,
            'CustomerGuestNo': customerguestno,
            'CustomerChildrenNo': customerchildrenno,
          },
        }));
        }
        else {
            dispatch( 
              CustomerAction.updateCustomer({
                body: {
                  'CustomerName': customername,
                 'CustomerEmail': customeremail,
                  'CustomerMobile': customermobile,
                  'CustomerRoomNo': customerroomno,
                  'CustomerIdType': customeridtype,
                  'IdProofNumber': idproofnumber,
                  'CustomerArea': customerarea,
                  'CustomerCity': customercity,
                  'CustomerState': customerstate,
                  'CustomerCountry': customercountry,
                  'CustomerCheckInDateTime': customercheckindatetime,
                  'CustomerCheckOutDateTime': customercheckoutdatetime,
                  'CustomerGuestNo': customerguestno,
                  'CustomerChildrenNo': customerchildrenno,
                },
              })  
            );
        }
    navigate('/');
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
                {
                    (isEdit) ? 
                    <input className="btn btn-primary" type="submit" value="Update" /> 
                    :
                    <input className="btn btn-primary" type="submit" value="Save" />

                }
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
