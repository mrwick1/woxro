import React from 'react'
import styled from 'styled-components'

const OurBanner = () => {
  return (
    <BannerWrap>
        <SubHead>OUR WORKS</SubHead>
        <MainHead>Learn how we create happy clients.</MainHead>
        <Desc>We're here to keep you up-to-date with all the latest happenings in and around mobile and web application development.</Desc>
    </BannerWrap>
  )
}

export default OurBanner

const BannerWrap = styled.div`
    padding-top: 3rem;
`

const SubHead = styled.h4`
    text-align: center;
    color: #585858;
    font-size: .8rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 2;
` 
const MainHead = styled.h1`
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0.06rem;
    text-align: center;
`

const Desc = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #464545;
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    letter-spacing: 0.06rem;
`