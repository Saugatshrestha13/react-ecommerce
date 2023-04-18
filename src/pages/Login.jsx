import styled from 'styled-components'
import {toast} from "react-toastify";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url('https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
    const [loginData, setLoginData] = useState({email: '', password: ''})
    const navigate = useNavigate();

    const loginCLicked = (e) => {
        e.preventDefault()
        console.log(loginData)
        toast.success("Logged in successfully!");
        navigate('/home')
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form onSubmit={loginCLicked}>
                    <Input placeholder='Email' value={loginData.email} type='email' onChange={(event) => {
                        setLoginData({...loginData, email: event.target.value})
                    }}/>
                    <Input placeholder='Password' value={loginData.password} type='password'
                           onChange={(event) => setLoginData({...loginData, password: event.target.value})}/>
                    <Button onClick={loginCLicked}>Log In</Button>
                    <StyledLink>Forgot Password?</StyledLink>
                    <StyledLink to={"/register"}>Create A New Account</StyledLink>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
