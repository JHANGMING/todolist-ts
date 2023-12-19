import { createSlice } from "@reduxjs/toolkit";
import { authData } from "../../utils/types";

const initialState:authData={
    nickname:"",
    token:"",
  }

export const authSlice=createSlice({
	name:"auth",
  initialState,
  reducers:{
    setUserData(state,action){
      const {nickname,cookieToken}=action.payload
      return  {...state,nickname,token:cookieToken}
    },
  }
})

export const {setUserData}=authSlice.actions;
export default authSlice.reducer; 