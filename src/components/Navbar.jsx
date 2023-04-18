import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  height: 65px;
  background-color: papayawhip;
  color: black;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-font: row nowrap;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  padding: 4px;
  background-size: cover;
  background: white;
`

const Input = styled.input`
  border: none;

  &:focus-visible {
    outline: none;
  }
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h3`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ListItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  background-size: cover;
`

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Shuvam Liquors.</Logo>
                </Center>
                <Right>
                    <ListItem onClick={() => {
                        navigate('/register')
                    }}>Register</ListItem>
                    <ListItem onClick={() => {
                        navigate('/login')
                    }}>Sign In</ListItem>
                    <ListItem onClick={() => {
                        navigate('/cart')
                    }}>
                        <ShoppingCartOutlined/>
                    </ListItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
