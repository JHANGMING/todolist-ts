import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useApiDeleteTodosMutation, useApiPatchTodosMutation } from "../../redux/api/todoApi"
import { Checkbox, Icon, IconWrapper, Label, ListItem, TodoLi, TodoUl } from "./styled"
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Toastfire } from "../../utils/SweetAlert";
import { TodoData } from "../../utils/types";
import { useEffect } from "react";
import { setEditData, setTodofilter } from "../../redux/slice/todoSlice";
import TodoEdit from "../TodoEdit";

const TodoItem=()=>{
  const dispatch=useDispatch()
  const state=useSelector((state:RootState)=>state)
  const {auth:{token},todo:{data:todoData,filterData,tab,id:editId}}=state
  
  useEffect(()=>{
    if (todoData) {
    dispatch(setTodofilter({ data: todoData,tab }));
  }
  },[todoData,tab])
  
  const [toggleTodo]=useApiPatchTodosMutation()
  const [deleteTodo]=useApiDeleteTodosMutation()
  const checkboxHandler=async(id:string)=>{
    try {
      const res=await toggleTodo({ id, token })
      if ('data' in res){
        Toastfire({icon:"success",title:`${res.data.message}`})
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  const delTodoHandler=async(id:string)=>{
    try {
      const res=await deleteTodo({ id, token })
      if ('data' in res){
        Toastfire({icon:"success",title:`${res.data.message}`})
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  const editHandler=(id:string,content:string)=>{
    dispatch(setEditData({id,content}))
  }
  return(
    <TodoUl>
      {filterData.map((item:TodoData)=>{
        const{id,status,content}=item
        return(
          <div key={id}>
          {id!==editId?(
            <TodoLi>
              <ListItem >
                <Label htmlFor={id} onClick={()=>checkboxHandler(id)}>
                  <Checkbox type="checkbox" id={id} checked={status} readOnly/>
                  <span>{content}</span>
                </Label>
                <IconWrapper>
                  <Icon>
                    <FaPencilAlt size={25}  onClick={()=>editHandler(id,content)}/>
                  </Icon>
                  <Icon>
                    <MdDeleteForever size={30} onClick={()=>delTodoHandler(id)}/>
                  </Icon>
                </IconWrapper>  
              </ListItem>
            </TodoLi>
          ):(
            <TodoEdit/>
          )}
          </div>
        )
      })}
    </TodoUl>
  )
}
export default TodoItem