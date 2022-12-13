import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import WhyList from './WhyList'





const WhyChoose = () => {
    return (
        <WhyWrapper>
            <Container>
                <SubTitle>WHY CHOOSE WOXRO</SubTitle>
                <H3>How woxro claim to excel in the IT Sector?</H3>
                <Para>From the beginning, We have been setting up the team by individuals who have gone beyond the limits of personal goals and who have the passion to do things from the bottom of their heart.</Para>
                <WhyList />
            </Container>
        </WhyWrapper>
    )
}

export default WhyChoose

const WhyWrapper = styled.div`
    padding-block:4.5rem;
    background-color:#fff;
`
const SubTitle = styled.strong`
    color: #585885;
    font-size: .8rem;
    text-align:center;
    display:block;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 1.43;
    margin-bottom: 2rem;
`
const H3 = styled.h3`
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 0rem;
    font-size: 2em;
`
const Para = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #464545;
    width: 80%;
    margin: auto;
    margin-bottom: auto;
    margin-bottom: 2rem;
    letter-spacing: 0.06rem;
`