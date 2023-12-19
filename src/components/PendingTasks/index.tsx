import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { RootState } from "../../redux/store";
import { TodoData } from "../../utils/types";


const PendingTasks=()=>{
  const todo=useSelector((state:RootState)=>state.todo)
  const filterDataLength=todo.data.filter((item:TodoData)=>!item.status).length
  return(
    <Wrapper>
      You have {filterDataLength} tasks to do
    </Wrapper>
  )
}
export default PendingTasks;