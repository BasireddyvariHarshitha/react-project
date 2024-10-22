import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [
    { custNo: 1, name: "John Doe", age: 28, city: "New York" },
    { custNo: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { custNo: 3, name: "Alice Johnson", age: 22, city: "Chicago" },
  ],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
