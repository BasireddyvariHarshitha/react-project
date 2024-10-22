import React from "react";
import "./ListCustomer.css";

function ListCustomer() {
  const customers = [
    { custNo: 1, name: "John Doe", age: 28, city: "New York" },
    { custNo: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { custNo: 3, name: "Alice Johnson", age: 22, city: "Chicago" },
    { custNo: 3, name: "Alice Johnson", age: 22, city: "Chicago" },
  ];

  return (
    <div className="list-customer-container">
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
