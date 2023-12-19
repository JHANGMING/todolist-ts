import styled from "styled-components";

export const Wrapper=styled.div`
  padding: 30px 0 90px 0;
`;

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h2{
    font-size:64px;
    line-height: 89px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }
  p{
    margin-bottom: 60px;
    font-size:32px;
    line-height: 40px;
  }
`;

export const Form=styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons=styled.div`
  display: flex;
  gap:30px;
  margin-top: 30px;
`;