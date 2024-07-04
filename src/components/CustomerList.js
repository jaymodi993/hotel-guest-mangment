import React from "react";
// import { CustomerAction } from "../Store/IndexSlice";
import { useSelector } from "react-redux";

function CustomerList() {
  debugger
  const {CustomerList} = useSelector((store) => store.customerSlice);

  
  return  (
    <div className="m-4">
      <main>
        <div className="">
          <h1 className="mt-4">CustomerList</h1>
          <div className="card mb-4">
            <div className="card-body container">
              <div className="datatable-top">
              
                <div className="datatable-search">
                  <input
                    className="datatable-input"
                    placeholder="Search..."
                    type="search"
                    title="Search within table"
                    aria-controls="datatablesSimple"
                  />
                </div>
              </div>

              <table
                id="datatablesSimple"
                className="table table-hover table-bordered"
              >
                <thead>
                  <tr>
                    <th>CustomerId</th>
                    <th>CustomerName</th>
                    <th>Mobile Number</th>
                    <th>CheckInDate</th>
                    <th>CheckOutDate</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                {CustomerList.map((customer, index) => (
                   <tr key={index}>
                    <td>{customer.CustomerId}</td>
                    <td>{customer.CustomerName}</td>
                    <td>{customer.CustomerMobile}</td>
                    <td>{customer.CustomerCheckInDateTime}</td>
                    <td>{customer.CustomerCheckOutDateTime}</td>
                    <td>{customer.CustomerGuestNo}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CustomerList;
