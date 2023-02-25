
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Product = ({ item }) => {
  return (
    <Container>
      sadfsdffsadf
      <img src={item.img} alt="Image" width={"100%"} height={"100%"} />
      {/* <Info>x
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info> */}
    </Container>
  );
};

export default Product;
