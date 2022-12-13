import React from 'react'
import styled from 'styled-components'
import LinkSingle from './LinkSingle';
import { AiOutlineDribbble, AiOutlineBehance } from 'react-icons/ai'

import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'

const linkedin = <ImLinkedin2 />
const facebook = <FaFacebookF />
const twitter = <BsTwitter />
const dribble = <AiOutlineDribbble />
const behance = <AiOutlineBehance />



const SingleNav = ({ title, type, data , src }) => {
    if (type === 'connect') {
        return (
            <div>
                <Title>{title}</Title>
                <FlexLogo>

                    {data.map((item) => {
                        return <A key={Math.random()} col={item.color} href={item.url}>{item.name === 'linkedin' ? linkedin : item.name === 'facebook' ? facebook : item.name === 'twitter' ? twitter : item.name === 'dribble' ? dribble : behance}</A>
                    })}
                </FlexLogo>
                <Iframe height='45px' width='100%' frameBorder='no' src={src} />
            </div>
        )
    }
    else {
        return (
            <div>
                <Title>{title}</Title>
                <List>
                    {data.map((link) => {
                        return <LinkSingle key={Math.random()} type={type} {...link} />
                    })}
                </List>
            </div>
        )
    }
}

export default SingleNav
const Title = styled.strong`
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.8;
    color:white;
    display:block;
`
const List = styled.ul`
    a{
        color: #a5a5a5;
        transition: color .5s;
        font-size: 0.9rem;
        line-height: 2.3;
        display:block;
        text-decoration:none;
        width:fit-content;
        &:hover{
            color:#fff
        }
    }
`

const FlexLogo = styled.div`
    display:flex;
    gap:5px;
    flex-wrap:wrap;
`
const A = styled.a`
    color: #A2A3A5;
    transition: all .5s ease !important;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;    
    height: 34px;
    line-height: 32px;
    font-size: 18px;
    border-radius: 50%;
    color: #A2A3A5;
    border: 2px solid #A2A3A5;
    text-align: center;
    &:hover{
        color:white;
        background-color:${props=>props.col}
    }
`
const Iframe = styled.iframe`
    margin-top:1.5rem;
`

