import { useSelector } from "react-redux";
import { Button, Wrapper } from "./styled";
import { RootState } from "../../redux/store";
import { Toastfire } from "../../utils/SweetAlert";
import { useApiDeleteTodosMutation } from "../../redux/api/todoApi";
import { TodoData } from "../../utils/types";

const TodoRemoveBtn=()=>{
  const [deleteTodo]=useApiDeleteTodosMutation()
  const state=useSelector((state:RootState)=>state)
  const {auth:{token},todo:{data:todoData}}=state
  const delAllItem=()=>{
    const newData=todoData.filter((item:TodoData)=>item.status)
    if (newData.length === 0) {
    Toastfire({icon:"info", title:"没有已完成的事項可刪除"});
    return; 
  }
    newData.map(async(item:TodoData)=>{
      const id=item.id
      try{
        await deleteTodo({ id, token })
      }catch (error) {
        Toastfire({icon:"error",title:`${error}`})
      }
    })
    Toastfire({icon:"success",title:`刪除已勾選代辦成功`})
  }

  return(
    <Wrapper>
      <Button onClick={delAllItem}>
        Remove all done
      </Button>
    </Wrapper>
  )
}
export default TodoRemoveBtn;