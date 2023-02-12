import { Container } from '@material-ui/core'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react';
import {sliderItems} from "../data"
import styled from 'styled-components'
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;
const Arrow = styled.div`
 width: 50px;
 height: 50px;
 background-color: white;
border-radius: 50%;
display: flex; 
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex; 
transform:translateX(0vw)
`;

const Slide = styled.div`
display: flex; 
width: 100vw;
height: 100vh;
align-items: center;
background-color: #${props=>props.bg}
`;

const ImgContainer = styled.div`
height: 100%;
flex:1
`;
const Image = styled.img`
height: 80%;

`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;




const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <KeyboardArrowLeftOutlined/>
      </Arrow>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <KeyboardArrowRightOutlined/>
      </Arrow>

      <Wrapper>
        {sliderItems.map((item) => (
        <Slide bg={item.bg}>
        <ImgContainer>
        <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>
                 {item.Desc}
                </Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
</Slide>
        ))}
      </Wrapper>
    
    </Container>
  )}


export default Slider
