import React from 'react'
import banner from '/src/assets/banner.mp4'
import styled from 'styled-components'

const Banner = () => {
    return (
        <BannerWrapper>
            <video className='videoTag' autoPlay loop muted>
                <source src={banner} type='video/mp4' />
            </video>
            <BannerText>
                <h1>Kerala's Leading Web Design Company</h1>
                <p>Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
            </BannerText>

        </BannerWrapper>
    )
}

export default Banner

const BannerWrapper = styled.div`
    position: relative;
    min-height:550px;
    padding-block: 3rem;
    background-color:#000;
    display: flex;
    align-items: center;
    video{
        width:100%;
        height: 100%;
        object-fit:cover;
        opacity:.4;
    position:absolute;
    z-index: 0;

    }
`
const BannerText = styled.div`
position: relative;
    height:100%;
    width:80%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        font-size: 5rem;
        line-height: 1.3;
        text-align:center;
        color:#fff;
        @media(max-width:860px){
            font-size: 4rem;
        }
        @media(max-width:660px){
            font-size: 3rem;
        }
    }
    p{
        text-align: center;
    font-size: 1.2rem;
    margin-top: 3.5rem;
    margin-inline: 5rem;
    letter-spacing: 0.06rem;
    color:#fff;
        @media(max-width:860px){
            font-size: 1rem;
            margin-inline:0;
        }
    }
    @media(max-width:860px){
        width:95%
    }
`

