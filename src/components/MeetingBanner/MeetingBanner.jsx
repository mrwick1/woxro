import React from 'react'
import styled from 'styled-components'
import { Container, FlexCenter } from '../TopBar/TopBar'
import SingleButton from './SingleButton'

const MeetingBanner = () => {
    return (
        <MeetingWrapper>
            <Container>
                <TextCont>
                    <H4>Digital Solutions For Your Business</H4>
                    <Para>We bring your business online and  raise your brand  to the next level , thanks for our wonderful team  of professionals  at woxro</Para>
                    <FlexCenterN>
                    <SingleButton url='https://woxro.com/./client-login' text='Client Login'/>
                    <SingleButton url='https://calendly.com/woxro' text='Schedule meeting'/>
                    </FlexCenterN>
                </TextCont>
            </Container>
        </MeetingWrapper>
    )
}

export default MeetingBanner


const MeetingWrapper = styled.div`
    background-image:url(/src/assets/meeting_banner.png);
    background-size:cover;
    padding-inline: 5rem;
    padding-block: 4.5rem;
    @media(max-width:880px){
        padding-inline: 0rem;
    }
`

const H4 = styled.h4`
    color: #fff;
    font-size: 2.5rem;
`
const Para = styled.p`
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 0.06rem;
`
const TextCont = styled.div`
    width:41%;
    @media(max-width:1215px){
        width: 60%;
    }
    @media(max-width:880px){
        width: 100%;
    }
`
const FlexCenterN = styled(FlexCenter)`
    @media(max-width:880px){
        margin-top:2rem
    }
    @media(max-width:420px){
        gap:10px;
        flex-direction:column;
        margin-top:3rem;
        align-items:flex-start;
    }
`