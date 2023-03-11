import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Description = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterFind = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.size};
cursor: pointer;
margin:0px 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;


const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;


const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
background-color: #f8f4f4;

}
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://the-corporate.com/public/profile_images/24988-1647770746.png" />
        <InfoContainer>
            <Title>Old Durbar Reserve 750ml</Title>
            <Description> A Blend of English grain spirit and 8 years old Scotch malt with spring water from the Himalayas finished in European oak Oloroso sherry barrels in Nepal.

Maturation of the imported Scotch malt constituent for eight years in traditional American oak barrels in Scotland mellows the maturing spirit and imparts warming layers of vanilla spiciness and ripe berry overtone with sweet rich taste, rich in barley malt.

The imported 8 years Scotch malt is blended with English grain spirit and spring water from the Himalayas, and matured for few months in European oak Oloroso sherry barrels, which imparts fruity and honeyed depths to this exceptional whisky.

 </Description>
            <Price> Rs 2400</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Find</FilterTitle>
                    <FilterFind find="whiskey"/>
                    <FilterFind find="Beer"/>
                    <FilterFind find="Wine"/>
                    <FilterFind find="Rum"/>
                </Filter>
                <Filter>
<FilterTitle>Size</FilterTitle>
<FilterSize>
    <FilterSizeOption>1Ltr</FilterSizeOption>
    <FilterSizeOption>750ml Full</FilterSizeOption>
    <FilterSizeOption>375ml Half</FilterSizeOption>
    <FilterSizeOption>180ml Qtr</FilterSizeOption>
    <FilterSizeOption>90ml Miniature</FilterSizeOption>
</FilterSize>

                </Filter>
            </FilterContainer>
            <AddContainer>


            <AmountContainer>
                <Remove/>

                <Amount>1</Amount>
                <Add/>
                </AmountContainer>    
                <Button>Add To Cart</Button>
            </AddContainer>
        </InfoContainer>
        </ImgContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
