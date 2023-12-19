import React from "react";
import { ErrorLoginMsg,LoginInput } from "./styled"
import { UseFormRegister,FieldErrors,RegisterOptions} from "react-hook-form";

export const LogInput:React.FC<InputsConfig>=({id,type,labelText,register,rules,errors})=>{
  return(
    <>
    <LoginInput type={type} placeholder={labelText} id={id} {...(register && register(id, rules))}/>
    {errors && id in errors && <ErrorLoginMsg >{errors[id]?.message}</ErrorLoginMsg>}
    </>
  )
}


export interface FormValues {
  email: string;
  nickname:string;
  password: string;
  confirmPassword: string;
}

export type InputsConfig = {
  id: keyof FormValues; 
  type: "email" | "text" |"password";
  labelText: string;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules: RegisterOptions; 
};

export type InputsDataConfig = {
  Inputs: InputsConfig[];
};
