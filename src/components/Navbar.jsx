import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 65px;
  background-color: papayawhip;
  color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 35px;
  padding: 4px;
  background-size: cover;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h3`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ListItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  background-size: cover;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input />
            <Search />
            <Search style={{ color: "gray", fontSize: 10 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shuvam Liquors.</Logo>
        </Center>
        <Right>
          <ListItem>REGISTER</ListItem>
          <ListItem>Sign In</ListItem>
          <ListItem>
            <ShoppingCartOutlined />
          </ListItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
