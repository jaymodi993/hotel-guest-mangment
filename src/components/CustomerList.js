import React from "react";

function CustomerList() {
  return  (
    <div className="m-4">
      <main>
        <div className="">
          <h1 className="mt-4">Tables</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>

          <div className="card mb-4">
            <div className="card-body container">
              <div className="datatable-top">
                <div className="datatable-dropdown">
                  <label>
                    <select className="datatable-selector">
                      <option value="5">5</option>
                      <option value="10" selected="">
                        10
                      </option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                    entries per page
                  </label>
                </div>
                <div className="datatable-search">
                  <input
                    classname="datatable-input"
                    placeholder="Search..."
                    type="search"
                    title="Search within table"
                    aria-controls="datatablesSimple"
                  />
                </div>
              </div>
              <table
                id="datatablesSimple"
                classname="table table-hover table-bordered"
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
