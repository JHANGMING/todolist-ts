import styled from "styled-components";

export const Container=styled.div`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h2{
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: 6px;
  }
`;

export const Form=styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const FormContainer=styled.div`
  background-color:rgba(0,0,0,.3);
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 30px 0 45px 60px;
`;

export const Buttons=styled.div`
  display: flex;
  justify-content: center;
  gap:30px;
`;