import React from 'react'
import styled from 'styled-components'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CareerContact = () => {
    return (
        <ContactWrap>
            <Flex>
                <div style={{width:'100%'}}>
                    <H2>Obtain further information by making a contact with our HR Department</H2>
                    <P>We're available for 10 hours a day! Contact to know more about vacancies at Woxro</P>
                </div>
                <FlexCenter>
                    <ReactBox>
                        <BsFillTelephoneFill />
                        <Rc>REACH OUT NOW!</Rc>
                        <Ph>7994468821</Ph>
                    </ReactBox>
                </FlexCenter>
            </Flex>
        </ContactWrap>
    )
}

export default CareerContact

const Rc = styled.strong`
    font-size: 0.8rem;
    color: #a5a5a5;
    margin-top: 1rem;
`
const Ph = styled.h1`
    font-size: 2.5rem;
`


const ContactWrap = styled.div`
    background-image:url('/src/assets/contactglobe.png');
    background-size:cover;
    min-height: 30rem;
    padding-inline:3rem;
    padding-block:2rem;
    display:flex;
    height:100%;
    align-items:center;
    color:#fff;
    `

const FlexCenter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    svg{
        height:32px;
        width:32px;
    }
`

const ReactBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Flex = styled.div`
    display:flex;
    width:100%;
    @media (max-width:740px) {
        flex-direction: column;
        gap: 3rem;
    }
`
const H2 = styled.h2`
    color:#fff;
    font-size: 2rem;
    border-left: 5px solid #fff;
    padding-left: 1rem;
    max-width: 470px;
`
const P = styled.p`
    margin-top: 1rem;
    color: #a5a5a5;
    font-size: 1.2rem;
    max-width: 440px;
`