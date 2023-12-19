import { useNavigate } from "react-router-dom";
import { FormValues, SignInput } from "../Input";
import { Buttons, Container, Form, FormContainer } from "./styled";
import { getButtonsData, getInputsData, textData } from "./data";
import { DefaultButton } from "../Button/sytled";
import { useForm } from "react-hook-form";
import { Swalfire, Toastfire } from "../../utils/SweetAlert";
import { useApiSignUpMutation } from "../../redux/api/authApi";
import { ApiError } from "../../utils/types";

const SignIn=()=>{  
  const navigate=useNavigate()
  const buttonsData = getButtonsData(navigate);
  const inputsData=getInputsData()
  const {register,handleSubmit,watch,formState:{errors}}=useForm<FormValues>();
  const [apiSignUp]=useApiSignUpMutation()
  const password = watch("password");
  const {title}=textData
  const onSubmit=async(data:FormValues)=>{
  const {email,password,nickname}=data
  const dataObj={
    email: email.trim(),
    password: password.trim(),
    nickname: nickname.trim()
    }
    try {
      const res=await apiSignUp(dataObj)
      if('data' in res){
        Swalfire({
          icon: 'success',
          title: '恭喜！註冊成功',
          text: '即將前往登入頁面',
          status: false,
          timer: 1500
        });
        navigate("/")
      }
      if('error' in res){
        let errorMessage = 'error';
        const errorResponse = res.error as ApiError; 
        if (errorResponse.data && errorResponse.data.message) {
          errorMessage = errorResponse.data.message;
        }
        Swalfire({
          icon: 'error',
          title: '哎唷！註冊失敗',
          text: errorMessage, 
          status: true,
          timer: 0 
        });
      }
    } catch (error) {
      Toastfire({icon:"error",title: `${error}`})
    }
  } 
  
  return(
    <Container>
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          {inputsData.Inputs.map((input)=>      
            {
            let {rules}=input
            const {id,type,labelText}=input
             if (id === "confirmPassword") {
                rules = {
                  ...rules,
                  validate: (value:string) => value === password || "密碼沒有一致喔！！"
                };
              }
              return (
              <SignInput key={id} id={id} type={type} labelText={labelText} errors={errors} register={register} rules={rules}/>
            )})
          }
        </FormContainer>
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
  )
}
export default SignIn;