import styled from "styled-components";

export const Wrapper=styled.section`
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80&fbclid=IwAR3lvPv7KpZO9CPbjtvrdV61N7txXEfMwhxpU5BZ1a9hfV_YrtyuFS24u04");
  background-size:cover;
`;

export const WrapperBlur=styled.div`
  background-color: rgba(111,121,134,.35);
  backdrop-filter: blur(2px);
  height: 100vh;
`;

export const Container=styled.div`
  max-width:1200px;
  padding:0px 12px;
  margin: 0 auto;
`;