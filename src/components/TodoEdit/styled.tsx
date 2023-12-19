import styled from "styled-components";

export const TodoLi=styled.li`
  padding: 0 24px;
  margin-bottom: 12px;
  color: rgba(70, 34, 9,.8);
`;

export const ListItem=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:2px solid rgba(82, 81, 81,.3);
  width: 100%;
  padding-bottom: 12px;
`;

export const Input=styled.input`
  padding: 3px 0 3px 15px;
  border-radius: 8px;
  font-size: 21px;
  line-height: 37px;
  color: black;
  background-color: rgba(255,255,255,.95);
`;

export const IconWrapper=styled.ul`
 display: flex;
 gap:9px;
`;

export const Icon=styled.li`
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`;