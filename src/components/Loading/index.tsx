import ReactLoading from 'react-loading';
import { Wrapper } from './styled';
export const Loading=()=>{
  return (
    <Wrapper>
      <ReactLoading type={"bubbles"} color={"white"} height={60} width={100} />
    </Wrapper>
  )
}