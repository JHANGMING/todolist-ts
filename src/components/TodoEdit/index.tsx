import { useDispatch, useSelector } from "react-redux";
import { Icon, IconWrapper, Input, ListItem, TodoLi } from "./styled";
import { RootState } from "../../redux/store";
import { GiConfirmed,GiCancel } from "react-icons/gi";
import { ChangeEvent, useState } from "react";
import { useApiPutTodosMutation } from "../../redux/api/todoApi";
import { Toastfire } from "../../utils/SweetAlert";
import { setEditData } from "../../redux/slice/todoSlice";
const TodoEdit=()=>{
  const [editTodo]=useApiPutTodosMutation()
  const dispatch=useDispatch()
  const state=useSelector((state:RootState)=>state)
  const {auth:{token},todo:{id,content}}=state
  const [inputContent, setInputContent] = useState(content);
  const editHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setInputContent(e.target.value);
  }
  const editTodoHandler=async()=>{
    try {
      const res=await editTodo({ id, text:inputContent, token })
      if('data' in res){
        Toastfire({icon:"success",title:`${res.data.message}`})
        dispatch(setEditData({id:"",content:""}))
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  const editCancelHandler=()=>{
    dispatch(setEditData({id:"",content:""}))
  }
  return(
    <TodoLi>
      <ListItem>
        <Input type="text" value={inputContent} onChange={editHandler}/>
        <IconWrapper>
          <Icon>
            <GiConfirmed size={30} onClick={editTodoHandler}/>
          </Icon>
          <Icon>
            <GiCancel size={30} onClick={editCancelHandler}/>
          </Icon>
        </IconWrapper>
      </ListItem>
    </TodoLi>
  )
}
export default TodoEdit;