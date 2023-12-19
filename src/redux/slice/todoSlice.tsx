import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../../utils/types";


const initialState:initialData={
    tab:"",
    data:[],
    filterData:[],
    id:"",
    content:""
  }

export const todoSlice=createSlice({
	name:"todo",
  initialState,
  reducers:{
    setTodoTab(state,action){
      return {...state,tab:action.payload}
    },
    setTodoData(state,action){
      return {...state,data:action.payload}
    },
   
  }
})

export const {setTodoTab,setTodoData}=todoSlice.actions;
export default todoSlice.reducer; 