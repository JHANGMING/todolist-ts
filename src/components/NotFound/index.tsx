import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styled";
import { useEffect } from "react";

const NotFound=()=>{
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },2000)
  },[])
  return(
    <Wrapper>
      <h1>老師說不能色色喔！！！</h1>
      <img src="https://github.com/JHANGMING/react-gh-pages-todoTask/blob/main/src/assets/2WrTnabULJ78cdA-K8FxR3vehtJPtBVo1PAMttTwDLY.png?raw=true" alt="notFind"/>
    </Wrapper>
  )
}
export default NotFound;