import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  username: '',
  phoneNumber: '',
  token: ''
};


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state,actions)=>{
        const {username, phoneNumber, token} = actions.payload
        state.username = username
        state.phoneNumber = phoneNumber
        state.token = token
    },
    setLogout: (state)=>{
      localStorage.removeItem('token')
      state.username = null
      state.phoneNumber = null
      state.token=null
    },
  }
});

export const { setCredentials,setLogout } = userSlice.actions;


export default userSlice.reducer;
