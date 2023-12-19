
import { useNavigate } from "react-router-dom";
import { FormValues, LogInput } from "../Input";
import { DefaultButton } from "../Button/sytled";
import { Buttons, Container, Form, Wrapper } from "./sytled"
import { getButtonsData, getInputsData, textData } from "./data";
import { useForm } from "react-hook-form";
import { useApiSignInMutation } from "../../redux/api/authApi";
import { Swalfire, Toastfire } from "../../utils/SweetAlert";
import { ApiError } from "../../utils/types";


const LogIn=()=>{
  const navigate=useNavigate()
  const buttonsData = getButtonsData(navigate);
  const inputsData=getInputsData()
  const [apiSignin]=useApiSignInMutation()
  const {title,desc}=textData;
  const {register,handleSubmit,formState:{errors}}=useForm<FormValues>();
  const onSubmit=async(data:FormValues)=>{
  const {email,password}=data
  const dataObj={
    email: email.trim(),
    password: password.trim(),
    }
    try {
      const res=await apiSignin(dataObj)
      if('data' in res){
        const {token}=res.data
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.cookie = `token=${token}; expires=${tomorrow.toUTCString()}`
        Swalfire({icon:'success',title:`登入成功`,text: `你可以前往待辦事項頁面`,status:false,timer:1000})
        navigate("/todo")
      }
      if('error' in res){
        let errorMessage = 'error';
        const errorResponse = res.error as ApiError; 
        if (errorResponse.data && errorResponse.data.message) {
          errorMessage = errorResponse.data.message;
        }
        Swalfire({icon:'error',title:`登入失敗`,text:errorMessage,status:true,timer:0})
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  } 
  return(
    <Wrapper>
      <Container>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputsData.Inputs.map((input)=>      
            {
            const {id,type,labelText,rules}=input
              return (
              <LogInput key={id} id={id} type={type} labelText={labelText} errors={errors} register={register} rules={rules}/>
            )})
          }
          <Buttons>
            {buttonsData.buttons.map((button) => (
              <DefaultButton
                key={button.text}
                type={button.type}
                theme={button.theme}
                onClick={button.onClick}
              >
                {button.text}
              </DefaultButton>
            ))}
          </Buttons>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default LogIn;