import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
`;

const Products = () => {
  return (
    <WrapperContainer>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </WrapperContainer>
  );
};

export default Products;
