import { createSlice } from "@reduxjs/toolkit";
import { TodoData, initialData } from "../../utils/types";


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
   setTodofilter(state,action){
      const {data,tab}=action.payload
      const newdata=data.filter((item:TodoData)=>{
        if(tab==="todo"){
          return item.status===false
        }else if(tab==="done"){
          return item.status!==false
        }else{
          return item
        }
      })
      return {...state,filterData:newdata}
    },
    setEditData(state,action){
      const {id,content}=action.payload;
      return {...state,id,content}
    }
  }
})

export const {setTodoTab,setTodoData,setTodofilter,setEditData}=todoSlice.actions;
export default todoSlice.reducer; 