import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import ClientList from './ClientList'

const Clients = () => {
    return (
        <ClientsWrapper>
            <Container>
                <H5>Our clients globally</H5>
                <H4>We are dependent on</H4>
                <ClientText>The post-digital age shows no signs of slowing down. And the need for rapid business transformation has never been greater. We meet clients wherever they are on their paths to change—in every industry across the globe—and partner with them to create lasting value in every direction.</ClientText>
                <ClientList />
            </Container>
        </ClientsWrapper>
    )
}

export default Clients

const ClientsWrapper = styled.div`
    padding:5rem;
    @media (max-width:1220px){
        padding:5rem 0 ;
    }

`
const H4 = styled.h4`
        font-size: 2em;
        display: block;
        font-weight: bold;
        text-align:center;
`
const H5 = styled.h5`
    color: #585858;
        font-size: .8rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        line-height: 1.43;
        margin-bottom: 2rem;
        text-align:center;
`
const ClientText = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #464545;
    width: 80%;
    margin: auto;
    margin-bottom: auto;
    margin-bottom: 2rem;
    letter-spacing: 0.06rem;
    @media (max-width:768px){
        width: 100%;
    }
`