import styled from 'styled-components'
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  const navigate = useNavigate()
  return <Container onClick={() => navigate('/estimation')}>This website also provides estimation party plan facility.</Container>
}

export default Announcement
