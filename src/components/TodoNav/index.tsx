import { useSelector } from "react-redux";
import Nav from "../Nav";
import { Button, NavAside, User, Wrapper } from "./styled";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useApiSignOutMutation } from "../../redux/api/authApi";
import Swal from "sweetalert2";
import { Swalfire } from "../../utils/SweetAlert";
import { ImguserPhoto } from "../../utils/img";

const TodoNav=()=>{
  const authData=useSelector((state:RootState)=>state.auth)
  const navigate=useNavigate()
  const [signout]=useApiSignOutMutation()
  const signOut=async()=>{
    Swal.fire({
      icon: 'question',
      title: '確定要離開代辦頁面嗎？',
      showCancelButton: true,
      confirmButtonText: 'sure',
      }).then(async(result) => {
      if (result.isConfirmed) {
        const res=await signout(authData.token);
        if('data' in res){
          document.cookie = "token=; expires=;";
          Swalfire({icon:'success',title:`${res.data.message}`,text:`即將回到登入頁面`,status:false,timer:1000})
          navigate("/")
        }  
      } 
  })}
  return(
    <Wrapper>
      <Nav/>
      <NavAside>
        <User>
          <img src={ImguserPhoto} alt="userPhoto"/>
          <h3>{authData.nickname}</h3>
        </User>
        <Button type="button" onClick={signOut}>Log out</Button>
      </NavAside>
    </Wrapper>
  )
}
export default TodoNav;