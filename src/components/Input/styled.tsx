import styled from "styled-components";
import { fifth } from "../../utils/commonStyled";

export const LoginInput=styled.input`
  width: 293px;
  margin-bottom: 12px;
  padding: 8px 0 8px 15px;
  border-radius: 8px;
  font-size:21px;
  line-height:37px;
  letter-spacing:0.05em;
`;

export const Label=styled.label`
  font-size:24px;
  line-height:36px;
  font-weight: 200;
`;

export const SignupInput=styled.input`
  background-color: rgba(255,255,255,.63);
  border-radius: 4px;
  width: 320px;
  height: 45px;
  letter-spacing: 2px;
  font-size:21px;
  line-height:37px;
  color: black;
  padding-left: 15px;
  margin-bottom: 9px;
  display: block;
`;

export const Errormsg=styled.span`
  color: ${fifth};
  font-size: 14px;
  line-height: 14px;
  margin-left: 9px;
`;

export const ErrorLoginMsg=styled.div`
  color: ${fifth};
  margin-bottom: 15px;
  margin-left: 40px;
  align-self: flex-start;
`;