import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const NavAside=styled.div`
  display: flex;
`;

export const User=styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  img{
    border-radius: 100%;
    object-fit: cover;
    margin-right: 9px;
    width: 50px;
    height:50px;
  }
  h3{
    color: white;
    font-size: 21px;
    line-height: 37px;
  }
`;

export const Button=styled.button`
  background-color: transparent;
  border: 1px solid #FFF;
  color: white;
  width: 110px;
  border-radius: 30px;
  cursor: pointer;
  &:hover{
    background-color:rgba(209,213,219.25);
    transform: scale(1.1);
    color: black;
    font-weight: 700;
  }
`;