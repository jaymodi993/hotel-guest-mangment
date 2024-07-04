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

const userStore = configureStore({
  reducer: {
    userSlice: UserSlice.reducer,
  },
});

export default userStore;
