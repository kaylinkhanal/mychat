import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  allUsers: [],
  currentSelectedUserDetails: {},
};


const userSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setUsersList: (state,actions)=>{
        state.allUsers = actions.payload
    },
    setUserSelectedDetails: (state,actions)=>{
      state.currentSelectedUserDetails =actions.payload
    },
  }
});

export const { setUsersList,setUserSelectedDetails } = userSlice.actions;


export default userSlice.reducer;
