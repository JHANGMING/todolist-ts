import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container, Wrapper } from "./styled";
import TodoNav from "../../components/TodoNav";
import TodoInput from "../../components/TodoInput";
import { Notask } from "../../components/Notask";
import { useApiGetTodosQuery } from "../../redux/api/todoApi";
import Todolist from "../../components/Todolist";
import { Loading } from "../../components/Loading";
import { useEffect } from "react";
import { setTodoData } from "../../redux/slice/todoSlice";

const Todo=()=>{
  const auth=useSelector((state:RootState)=>state.auth)
  const {data: todosData,isLoading}=useApiGetTodosQuery(auth.token)
  const dispatch=useDispatch()
  useEffect(()=>{
    if (todosData) {
    dispatch(setTodoData(todosData.data));
  }
  },[todosData, dispatch])
  return(
    <>
      {isLoading? <Loading/> :(
        <Wrapper>
          <Container>
            <TodoNav/>
            <TodoInput/>
            {todosData?.data.length? <Todolist />:<Notask/>}
          </Container>
        </Wrapper>
      )}
    </>
  )
}

export default Todo;