import React, { useState } from "react";
import { CustomerAction } from "../Store/IndexSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const { CustomerList } = useSelector((store) => store.customerSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredCustomers, setFilteredCustomers] = useState(CustomerList)

  const handleEditClick = (customer) => {
    dispatch(CustomerAction.fillFormCustomer({
      body: customer
    }));
    navigate("add-customer");
  };
  const handleDeleteClick = (customer) => {
    dispatch(CustomerAction.deleteCustomer({
      body: customer
    }));
  };
  const handleSearch = (searchText) => {
    const filteredItems = CustomerList.filter((customer) =>
      customer.CustomerName.toLowerCase().includes(searchText.toLowerCase())
      );
  
      setFilteredCustomers(filteredItems);
  };


  return (
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
                    onChange={(e) => handleSearch(e.target.value)}
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
                  {filteredCustomers.map((customer, index) => (
                    <tr key={customer.CustomerId}>
                      <td>{customer.CustomerId}</td>
                      <td>{customer.CustomerName}</td>
                      <td>{customer.CustomerMobile}</td>
                      <td>{customer.CustomerCheckInDateTime}</td>
                      <td>{customer.CustomerCheckOutDateTime}</td>
                      <td>{customer.CustomerGuestNo}</td>
                      <td>

                        <button className="btn btn-secondary ms-5" onClick={() => handleEditClick(customer)} >
                          Edit
                        </button>
                        <button className="btn btn-primary ms-5" onClick={() => handleDeleteClick(customer)}>
                          Delete
                        </button>
                      </td>
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
