import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const EstimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: papayawhip;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  height: 80%;
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
const Estimation = () => {
    const [estimationData, setEstimationData] = useState(null)
    return (
        <>
            <Navbar/>
            <EstimationContainer>
                <Wrapper>
                    <Title>Get an customized accurate estimation for your event</Title>
                    <Form>
                        <FormControl sx={{ m: 1, width: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Event Type</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Input placeholder='Last Name' value={estimationData?.lastName} type='text'
                               onChange={(event) => {
                                   setEstimationData({...estimationData, lastName: event.target.value})
                               }}/>
                        <Input placeholder='Email' value={estimationData?.email} type='email' onChange={(event) => {
                            setEstimationData({...estimationData, email: event.target.value})
                        }}/>
                        <Input placeholder='Username' value={estimationData?.username} type='text'
                               onChange={(event) => {
                                   setEstimationData({...estimationData, username: event.target.value})
                               }}/>
                        <Input placeholder='Password' value={estimationData?.password} type='password'
                               onChange={(event) => {
                                   setEstimationData({...estimationData, password: event.target.value})
                               }}/>
                        <Input placeholder='Confirm Password' value={estimationData?.confirmPassword} type='password'
                               onChange={(event) => {
                                   setEstimationData({...estimationData, confirmPassword: event.target.value})
                               }}/>
                        <Button>Get Estimation</Button>
                    </Form>
                </Wrapper>
            </EstimationContainer>
            <Footer/>
        </>
    )
}

export default Estimation
