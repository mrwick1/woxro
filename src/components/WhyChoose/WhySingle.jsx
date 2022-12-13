import React from 'react'
import styled from 'styled-components'

const WhySingle = ({id, title, text ,idColour, img ,background}) => {
  return (
    <WhyCard background={background} >
        <ID idColour={idColour}>{id}</ID>
        <Icon src={`/src/assets/${img}.svg`} />
        <H2>{title}</H2>
        <Para>{text}</Para>
    </WhyCard>
  )
}

export default WhySingle

const WhyCard = styled.div`
    align-self: center;
    height: 260px;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    padding:1.5rem;
    background-color:${props => props.background};
    position: relative;;
`
const ID = styled.p`
    margin-bottom: 10px;
    color:${props => props.idColour};
`

const Icon = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit:cover;
    position: absolute;
    top: 1rem;
    right: 1rem;
`

const H2 = styled.h2`
    margin-bottom: 8px;
    font-size:1rem;
    word-spacing: 99999px;
`
const Para = styled.p`
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #464545;
    letter-spacing: 0.06rem;
`