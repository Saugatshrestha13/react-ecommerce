import {
  Email,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Pinterest,
  Twitter,
} from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  display: flex;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shuvam.</Logo>
        <Desc>Get your liquor products and exciting facilities.</Desc>
        <SocialContainer>
          <SocialIcon color='385999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E440SF'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Whiskey</ListItem>
          <ListItem>Beer</ListItem>
          <ListItem>Wine</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Snacks</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: '10px' }} /> Nayabazaar Dharagalli Kathmandu
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: '10px' }} /> 9860419989
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} /> saugats029@gmail.com
        </ContactItem>
        <Payment src='https://www.nicepng.com/png/detail/395-3955693_paypal-payment-method-logo.png' />
      </Right>
    </Container>
  )
}

export default Footer
