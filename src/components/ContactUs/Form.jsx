import React from 'react'
import styled from 'styled-components'

const Form = () => {
  return (
    <FromWrap>
        <H2>Let's get connected!</H2>
        <P>It's our pleasure to have a chance to cooperate.</P>
        <Input placeholder='Name *' />
        <Input placeholder='Email *' />
        <Input placeholder='Contact Number *' />
        <Iframe frameBorder='0' sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation' height='78px' width='304px'  src='https://www.recaptcha.net/recaptcha/api2/anchor?ar=2&k=6LcTdf0bAAAAAL3q-gVUIEOElHjhfYaHqlbmN2_X&co=aHR0cHM6Ly93b3hyby5jb206NDQz&hl=en&v=vP4jQKq0YJFzU6e21-BGy3GP&size=normal&cb=pz5r6isbzzog' />
        <Button>Send message</Button>
    </FromWrap>
  )
}

export default Form

const Button = styled.button`
    margin-top: 2rem;
    padding: 12px 20px;
    margin: 0.5rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
    background-color: #fff;
    color: #454646;
    border: 1px solid #454646;
    transition: color 0.3s;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;
`

const Iframe = styled.iframe`
    width: 304px;
    height: 79px;
    overflow:hidden;
`

const FromWrap = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Input = styled.input`
    width: 85%;
    padding: 12px 20px;
    margin: 0.5rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
    outline: none;
    max-width: 540px;
    margin-block: 0.8rem;
`

const H2 = styled.h2`
    color: #464545;
    width: auto;
    max-width: 480px;
    text-align: center;
    font-size: 1.6rem;
    margin-block: 1rem;
`
const P = styled.p`
    color: #464545;
    width: auto;
    max-width: 480px;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
`