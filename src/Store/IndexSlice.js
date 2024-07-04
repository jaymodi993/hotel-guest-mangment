import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userDetail } from "../Database.js";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: { isUserAuthenticated: false },
  reducers: {
    setIsUserAuthenticated: (state, action) => {
      if (
        action.payload.body.userName === userDetail.userName &&
        action.payload.body.password === userDetail.password
      ) {
        state.isUserAuthenticated = true;
      } else {
        state.isUserAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isUserAuthenticated = false;
    },
  },
});

export const UserAction = UserSlice.actions;

const CustomerSlice = createSlice({
  name: "customerSlice",
  initialState: { CustomerList: [], CustomerObj: {} },
  reducers: {
    addCustomer: (state, action) => {
      debugger
      action.payload.body.CustomerId = Math.floor(Math.random() * 10000);
      const newCustomerList = [...state.CustomerList, action.payload.body];
      state.CustomerList = newCustomerList;
      return state;
    },
  },
});
export const CustomerAction = CustomerSlice.actions;

const userStore = configureStore({
  reducer: {
    userSlice: UserSlice.reducer,
    customerSlice: CustomerSlice.reducer,
  },
});

export default userStore;
