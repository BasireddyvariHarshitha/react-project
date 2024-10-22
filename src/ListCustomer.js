import React from "react";
import "./ListCustomer.css";
import { useSelector } from "react-redux";

function ListCustomer() {
  const customers = useSelector((state) => state.customer.customers);

  return (
    <div>
      <h1 className="title">List Customers</h1>
      <div className="table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th>CustomerNo</th>
              <th>CustomerName</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.custNo}>
                <td>{customer.custNo}</td>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListCustomer;
