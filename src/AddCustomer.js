import React, { useState } from "react";
import "./AddCustomer.css";
import { useDispatch } from "react-redux";
import { addCustomer } from "./CustomerSlice";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    custNo: "",
    name: "",
    age: "",
    city: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer(customer));
    setCustomer({ custNo: "", name: "", age: "", city: "" });
  };

  return (
    <div>
      <h1 className="title">Add Customer</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cust No</label>
            <input
              type="text"
              name="custNo"
              value={customer.custNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={customer.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={customer.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
