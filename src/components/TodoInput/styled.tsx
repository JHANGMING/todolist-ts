import styled from "styled-components";
import { night } from "../../utils/commonStyled";


export const Wrapper=styled.div`
  position: relative;
  width: 512px;
  margin-bottom: 18px;
  align-self: flex-end;
`;
export const Input=styled.input`
  height: 50px;
  width: 100%;
  padding: 12px 0 12px 15px;
  border-radius: 8px;
  font-size: 21px;
  line-height:37px;
  color: black;
  background-color:rgba(255,255,255,.95);
`;

export const Icon=styled.div`
  cursor: pointer;
  color: ${night};
  position: absolute;
  top:0px;
  right:5px;
  &:hover{
    transform: scale(1.1);
  }
`;
