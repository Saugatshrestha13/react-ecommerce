import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
background-color: black;
`

const wrapper = styled.div`
padding: 10px 20px;
display: flex;
allign-items: center;
justify-content : space-between;
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 allign-items: center;
 `;

const language = styled.span`
  font-size: 14px;
  cursor: pointer;

`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
allign-items: center;
margin-left: 25px;
padding = 5px;
`

const Input = styled.input`
border: none;
`

const Center = styled.div`
 flex: 1;
 text-allign: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
 flex: 1;
 display: flex;
 allign-items: center;
 justify-content: flex-end;
`;


const ListItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
     <wrapper>
       <Left>
        <language>English</language>
       <SearchContainer>
       <Input/>
<Search/>
<Search style={{color:"gray", fontSize:16}}/>





       </SearchContainer>
         

         
       </Left>
       <Center><Logo>Shuvam Liquors.</Logo></Center>
       <Right>

        <ListItem>REGISTER</ListItem>
        <ListItem>Sign In</ListItem>
        <ListItem>
        <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge>
        </ListItem>
       </Right>
        </wrapper> 
    </Container>
  )
}

export default Navbar
