import React from "react";
import { ErrorLoginMsg, Errormsg, Label, LoginInput, SignupInput } from "./styled"
import { UseFormRegister,FieldErrors,RegisterOptions} from "react-hook-form";

export const LogInput:React.FC<InputsConfig>=({id,type,labelText,register,rules,errors})=>{
  return(
    <>
    <LoginInput type={type} placeholder={labelText} id={id} {...(register && register(id, rules))}/>
    {errors && id in errors && <ErrorLoginMsg >{errors[id]?.message}</ErrorLoginMsg>}
    </>
  )
}
export const SignInput:React.FC<InputsConfig>=({id,type,labelText,errors,register,rules})=>{

  return(
    <>
    <Label htmlFor={id}>{labelText}</Label>
    {errors && id in errors && <Errormsg>{errors[id]?.message}</Errormsg>}
    <SignupInput type={type} id={id} placeholder={id} {...(register && register(id, rules))}/>
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
