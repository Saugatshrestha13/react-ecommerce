import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Drinks</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
        </Filter>
        <Select>
          <Option disabled selected>
            Type
          </Option>
          <Option>Whiskey</Option>
          <Option>Beer</Option>
          <Option>Wine</Option>
          <Option>Champagne</Option>
          <Option>Rum</Option>
          <Option>Vodka</Option>
          <Option>Syrups</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>1ltr</Option>
          <Option>750ml Full</Option>
          <Option>375ml Half</Option>
          <Option>180ml Quarter</Option>
          <Option>2/4Ltrs</Option>
          <Option>90ml Miniatures</Option>
        </Select>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
