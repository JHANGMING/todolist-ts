import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import { Container, Wrapper, WrapperBlur } from "./styled";

const Home=()=>{
  return(
    <Wrapper>
      <WrapperBlur>
        <Container>
          <Nav/>
          <Outlet/>
        </Container>
      </WrapperBlur>
    </Wrapper>
  )
}

export default Home;