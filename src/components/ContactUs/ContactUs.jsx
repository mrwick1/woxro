import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import Form from './Form'

const ContactUs = () => {
    return (
        <ContactWrapper>
            <Img src='/src/assets/contactglobe.png' />
            <Container>
                <ContactGrid>
                    <LeftSec>
                        <H2>To make requests for further information, contact us via our social channels.</H2>
                        <Para>Our service is also available at <a href="https://woxro.com/web-design-company-in-uae">UAE</a>
                            <br />
                            We just need a couple of hours!
                            <br />
                            No more than 2 working days since receiving your request.
                        </Para>
                    </LeftSec>
                    <RightSec>
                        <FormDiv>
                            <Form />
                        </FormDiv>
                    </RightSec>
                </ContactGrid>
            </Container>

        </ContactWrapper>
    )
}

export default ContactUs

const ContactWrapper = styled.div`
    background:black;
    position: relative;
    min-height: 42rem;
    overflow:hidden;
`
const Img = styled.img`
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
`
const ContactGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    color:#fff;
    min-height: 42rem;
    position: relative;
    z-index:2;
    padding-bottom: 2rem;
    @media (max-width:970px) {
        grid-template-columns:repeat(1,1fr);
    }
`
const H2 = styled.h2`
    font-size: 2rem;
`
const LeftSec = styled.div`
    margin: 2rem;
    display:flex;
    flex-direction:column;
    justify-content: center;
    @media (max-width:500px) {
        margin:2rem 1rem;
    }
`
const Para = styled.p`
    a{
        text-decoration:none;
        color:#fff;
    }
`
const RightSec = styled.div`
    margin: 2rem;
    display:flex;
    flex-direction:column;
    justify-content: center;
    @media (max-width:500px) {
        margin:0;
    }
`
const FormDiv = styled.div`
    margin-right:0;
    margin-left:auto;
    max-width: 380px;
    width: 380px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding-block: 1rem;
    @media (max-width:970px) {
        margin:auto;
    }
    @media (max-width:500px) {
        width:100%;
        max-width:100%;
    }
`