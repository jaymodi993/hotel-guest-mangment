import React from "react";

function CustomerList() {
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
                    <th>CustomerName</th>
                    <th>CustomerId</th>
                    <th>Mobile Number</th>
                    <th>CheckInDate</th>
                    <th>CheckOutDate</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Patel Akshesh</td>
                    <td>1234567890</td>
                    <td>9067892009</td>
                    <td>05-07-2024</td>
                    <td>05-07-2024</td>
                    <td>999</td>
                  </tr>
                  
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
