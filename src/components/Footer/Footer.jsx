import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import ContactGrid from './ContactGrid'
import NavGrid from './NavGrid'

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <Container>
                    <NavGrid />
                    <HR />
                    <ContactGrid />
                </Container>
            </FooterWrapper>
            <FooterCopy>
                <p>© 2016-2022 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved</p>
            </FooterCopy>
        </>
    )
}

export default Footer


const FooterWrapper = styled.div`
    background-color:#161a1e;
    padding:2rem;
`
const HR = styled.hr`
    height: 1px;
    background-color: #696969;
    margin-inline: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const FooterCopy = styled.div`
padding-inline: 2rem;
padding-block: 1rem;
background-color: #000;
p{
    color: #a5a5a5;
    opacity: 0.8;
    font-size: 0.9rem;
    text-align:center;
}
` 
