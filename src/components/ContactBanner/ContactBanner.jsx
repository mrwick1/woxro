import React from 'react'
import styled from 'styled-components'
import { Container, FlexCenter } from '../TopBar/TopBar'
import SingleButton from './SingleButton'
import globe from '/src/assets/woxroglobe.png'

const ContactBanner = () => {
    return (
        <ContactWrapper >
            <Container>
                <FlexBetween globe={globe}>
                    <h4>We offer all kinds of IT services that ensure your success</h4>
                    <ShrinkRight>

                        <FlexCenter>
                            <SingleButton name='Contact us' icon='phone' url='contactus' />
                            <SingleButton name="Let's Talk" icon='message' url='letstalk' />
                        </FlexCenter>
                    </ShrinkRight>
                </FlexBetween>
            </Container>
        </ContactWrapper>
    )
}

export default ContactBanner

const ContactWrapper = styled.div`
    padding: 0 3rem;
    background-color:#000;
    h4{
        font-size: 2rem;
        font-weight: bold;
        align-items: center;
        flex:2;
        display:flex;
        color:white;
        @media(max-width:860px){
            flex:1;
    }
    }
    a{
        text-decoration:none;
    }
    @media(max-width:600px){
        padding: 0 .5rem;
    }
`
const ShrinkRight = styled.div`
    flex:1.5;
    justify-content: flex-end;
    display: flex;
    @media(max-width:860px){
        justify-content: flex-start;
        flex:1;
    }
`

const FlexBetween = styled.div`
    display:flex;
    justify-content:space-between;
    background-image:url(${props=>props.globe});
    background-repeat:no-repeat;
    height: 20rem;
    @media(max-width:860px){
        flex-direction:column;
        padding: 1rem;
    }
    @media(max-width:600px){
        padding: 1rem 0;
    }
`