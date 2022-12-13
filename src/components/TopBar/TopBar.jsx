import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const TopBar = () => {
    return (
        <TopbarBg>
            <Container>
                <FlexBetween>
                    <Link to='/woxro/careers'>
                        <b>Now Hiring : </b>
                        <p>Looking for a job in Full Stack Development? </p>
                    </Link>
                    <FlexCenter>
                        <a href="tel:487 2080 212"><b><FaPhoneAlt /> +91 487 2080 212</b> </a>
                        <p><ImLocation /> Leshore Business Park, Thrissur</p>
                    </FlexCenter>
                </FlexBetween>
            </Container>
            
        </TopbarBg>
    )
}

export default TopBar



const TopbarBg = styled.div`
    background-color:black;
    color:white;
    padding:10px;  
    a{
        text-decoration:none;
        color:white;
        display:flex;
        align-items:center;
        gap:7px;
        font-size:.9rem
    } 
    @media (max-width: 920px) {
        display:none;
  }
`

export const FlexBetween = styled.div`
    display:flex;
    justify-content:space-between;
`
export const FlexCenter = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
    flex-shrink:0;
`



export const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding: 0 15px;
`