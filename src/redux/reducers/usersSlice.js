import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../utils/constants";

const initialState = {
  data: [],
  status: FETCH_STATUS.INITIAL,
};
const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      const users = state.data;
      state.data = [newUser, ...users];
    },
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addUser, setUsers, setStatus } = usersSlice.actions;

export default usersSlice.reducer;
