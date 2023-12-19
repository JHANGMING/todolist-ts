import styled from "styled-components";

export const Wrapper=styled.section`
  width: 100%;
  height: 100vh;
  background-image:url("https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MDQzNjB8MHwxfGFsbHx8fHx8fHx8fDE2OTYyMzY3OTN8&ixlib=rb-4.0.3&q=85"),linear-gradient(90deg, rgba(41, 23, 8, 1) 100%, transparent 0);
  background-size:50% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-position: left;
`;

export const Container=styled.div`
  max-width:1200px;
  padding:0px 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;