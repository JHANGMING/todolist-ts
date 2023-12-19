import PendingTasks from "../PendingTasks";
import TodoItem from "../TodoItem";
import TodoRemoveBtn from "../TodoRemoveBtn";
import { Todotab } from "../Todotab"
import { Wrapper } from "./styled";

const Todolist=()=>{
  return(
    <Wrapper>
      <Todotab/>
      <PendingTasks/>
      <TodoItem/>
      <TodoRemoveBtn/>
    </Wrapper>
  )
}
export default Todolist;