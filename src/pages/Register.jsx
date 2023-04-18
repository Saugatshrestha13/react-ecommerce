import styled from 'styled-components'
import {useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url('https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0 0 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const registerClicked = (e) => {
        e.preventDefault()
        console.log(registerData)
        navigate('/login')
        toast.success("Registered successfully!");
    }

    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form onSubmit={registerClicked}>
                    <Input placeholder='First Name' value={registerData.firstName} type='text' onChange={(event) => {
                        setRegisterData({...registerData, firstName: event.target.value})
                    }}/>
                    <Input placeholder='Last Name' value={registerData.lastName} type='text' onChange={(event) => {
                        setRegisterData({...registerData, lastName: event.target.value})
                    }}/>
                    <Input placeholder='Email' value={registerData.email} type='email' onChange={(event) => {
                        setRegisterData({...registerData, email: event.target.value})
                    }}/>
                    <Input placeholder='Username' value={registerData.username} type='text' onChange={(event) => {
                        setRegisterData({...registerData, username: event.target.value})
                    }}/>
                    <Input placeholder='Password' value={registerData.password} type='password' onChange={(event) => {
                        setRegisterData({...registerData, password: event.target.value})
                    }}/>
                    <Input placeholder='Confirm Password' value={registerData.confirmPassword} type='password'
                           onChange={(event) => {
                               setRegisterData({...registerData, confirmPassword: event.target.value})
                           }}/>
                    <Button onClick={registerClicked}>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
