import styled from "styled-components";
import { fifth, seventh } from "../../utils/commonStyled";

export const Title=styled.h1`
  font-size:40px;
  line-height: 40px;
  font-weight:800;
  color:${fifth};
  margin-left: 30px;
  cursor: pointer;
  span{
    color: ${seventh};
    font-size:64px;
    line-height: 89px;
  }
`;