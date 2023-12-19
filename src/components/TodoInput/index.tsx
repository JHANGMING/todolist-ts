import { MdAddBox } from "react-icons/md";
import { Icon, Input, Wrapper } from "./styled";
import { useState, KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useApiPostTodosMutation } from "../../redux/api/todoApi";
import { Toastfire } from "../../utils/SweetAlert";
const TodoInput=()=>{
  const [value,setValue]=useState("")
  const auth=useSelector((state:RootState)=>state.auth)
  const token=auth.token;
  const [addTodo]=useApiPostTodosMutation()
  
  const addTodoHandler=async()=>{
    if(!value)return
    const todo={"content":value.trim()};
    try {
      const res=await addTodo({ todo, token }) 
     if ('data' in res) {
        Toastfire({ icon: 'success', title: `加入代辦事項:${res.data.newTodo.content} 成功！` });
        setValue("");
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  const keyHandler=(e: KeyboardEvent<HTMLInputElement>)=>{
    if(e.key!=="Enter")return
    addTodoHandler()
  }
  return(
    <Wrapper>
      <Input type="text" placeholder="Please enter your task..." value={value} onChange={(e)=>setValue(e.target.value)} onKeyPress={keyHandler}/>
      <Icon>
        <MdAddBox size={50} onClick={addTodoHandler}/>
      </Icon>
    </Wrapper>
  )
}
export default TodoInput;