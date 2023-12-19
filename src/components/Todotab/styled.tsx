import styled,{ css }from "styled-components";
import {tenth } from "../../utils/commonStyled";

interface TabLiProps {
  isActive: boolean;
}

export const Wrapper=styled.div`
  margin-bottom: 9px;
`;

export const TabUl=styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: ${tenth};
  border-bottom:2px solid rgba(82, 81, 81,.3); 
  padding-top: 15px;
`;

const active=css`
  border-bottom: 3px solid rgba(70,34,9,.8);
`;

export const TabLi=styled.li<TabLiProps>`
  width: 25%;
  cursor: pointer;
  padding: 0 12px 9px 12px;
  ${({isActive})=>isActive ? active : ''}
  &:hover{
    transform: scale(1.1);
  }
`;