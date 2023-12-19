import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { InputsDataConfig } from '../Input';

export const getButtonsData = (navigate: NavigateFunction):DataConfig => ({
  buttons: [
    {
      type: "submit",
      text: "Log In",
      theme: "login",
    },
    {
      type: "button",
      text: "Register",
      theme: "register",
      onClick: () => navigate("/sign")
    }
  ]
});

export const getInputsData = ():InputsDataConfig  => {

  return {
    Inputs: [
      {
        id: "email",
        type: "email",
        labelText: "Email",
        rules: {
          required: 'Email 為必填',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Email 格式不正確',
          },
        }
      },
      {
        id: "password",
        type: "password",
        labelText: "Password",
        rules:{
          required: {
            value: true,
            message: '請輸入密碼!'
          },
          minLength: {
              value: 6,
              message: "密碼長度至少6位字元"
          }
        }
      },
    ]
  };
};

export const textData={
  title:"Organize it all with ToDoList",
  desc:"Simple tools, Efficient time, Better work."
}

interface ButtonConfig{
  type: "submit" | "button";
  text: string;
  theme: "login" | "register"; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface DataConfig{
  buttons: ButtonConfig[];
}
