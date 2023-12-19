import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { Wrapper,TabUl, TabLi } from "./styled"
import { setTodoTab } from "../../redux/slice/todoSlice"

export const Todotab=()=>{
  const [tab,setTab]=useState("all")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setTodoTab(tab))
  },[tab])
  
  return(
    <Wrapper>
      <TabUl>
        <TabLi isActive={tab === "all"} onClick={()=>setTab("all")}>All</TabLi>
        <TabLi isActive={tab === "todo"} onClick={()=>setTab("todo")}>To do</TabLi>
        <TabLi isActive={tab === "done"} onClick={()=>setTab("done")}>Done</TabLi>
      </TabUl>
    </Wrapper>
  )
}