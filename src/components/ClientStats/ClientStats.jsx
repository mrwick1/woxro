import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'


const ClientStats = () => {
    return (
        <ClientWrapper>
            <Container>
                <Text>
                    <H2>Client <br /> Statistics</H2>
                    <Para>
                        We meet clients wherever they are on their paths <br />
                        to change in every industry across the globe.
                    </Para>
                    <Flex>
                        <Sec>
                            <h6>Web Development Projects</h6>
                            <span>324+ </span>
                        </Sec>
                        <Sec>
                            <h6>Development Team</h6>
                            <span>52+ </span>
                        </Sec>
                    </Flex>
                </Text>
            </Container>
        </ClientWrapper>
    )
}

export default ClientStats

const ClientWrapper = styled.div`
    background-image : url('/src/assets/clientmap.jpg');
    padding-top:3rem;
    background-size:cover;
`
const H2 = styled.h2`
    color: #fff;
    font-size: 50px;
`
const Text = styled.div`
    padding: 50px;
`
const Para = styled.div`
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: 1px;
    padding-bottom:50px;
`
const Flex = styled.div`
    display:flex;
    gap:200px;
    @media (max-width:730px) {
        gap:50px;
    }
    @media (max-width:550px) {
        flex-direction:column;
        gap:20px;
    }
`

const Sec = styled.div`
    h6{
        color: #ffffff;
        opacity: 0.9;
        font-size:1rem;
        font-weight:400;
    }
    span{
        font-size: 80px;
        color: #ffffff;
        font-weight: lighter;
    }
`