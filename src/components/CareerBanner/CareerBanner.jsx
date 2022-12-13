import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'


const CareerBanner = () => {
    return (
        <BannerWrapper>
            <Img src='/src/assets/bannerback.JPG' />
            <Back>

            <H1>Life at Woxro. Pay a visit & have some coffee!</H1>
            </Back>
        </BannerWrapper>
    )
}

export default CareerBanner

const Img = styled.img`
    width:100%;
    position:absolute;
    height:100%;
    object-fit:cover;
`
const BannerWrapper = styled.div`
    max-height: 34rem;
    height: 34rem;
    position: relative;
`
const H1 = styled.h1`
    position: relative;
    color: #fff;
    max-width: 670px;
    font-size: 3rem;
    text-align: center;
    @media (max-width: 650px) {
        padding-inline:1rem;
    }
`
const Back = styled.div`
    background-color: rgb(0, 0, 0,0.5);
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
`