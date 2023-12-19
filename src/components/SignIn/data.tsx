import React from "react";
import { NavigateFunction } from "react-router-dom";
import {  InputsDataConfig } from "../Input";

export const getButtonsData = (navigate: NavigateFunction):buttonDataConfig => ({
  buttons: [
    {
      type: "submit",
      text: "Create Account",
      theme: "createAccount",
    },
    {
      type: "button",
      text: "Log In",
      theme: "logIn",
      onClick: () => navigate("/")
    }
  ]
});


export const getInputsData = (): InputsDataConfig => {

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
        id: "nickname",
        type: "text",
        labelText: "User name",
        rules:{
          required: {
            value:true,
            message: '請輸入您的小名!'
          }
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
      {
        id: "confirmPassword",
        type: "password",
        labelText: "Confirm Password",
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
      }
    ]
  };
};

export const textData={
  title:"Register",
}

interface ButtonConfig{
  type: "submit" | "button";
  text: string;
  theme: "createAccount" | "logIn"; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface buttonDataConfig{
  buttons: ButtonConfig[];
}
