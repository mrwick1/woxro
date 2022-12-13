import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'

const Slide = ({ name , img , desig , text}) => {
    return (
        <div>
            <Container>
                <Flex>
                    <ImgSec>
                        <Img src={`/src/assets/${img}.png`} />
                    </ImgSec>
                    <TextSec>
                        <Cent>
                            <Text>{text}</Text>
                            <Name>{name}</Name>
                            <Desig>{desig}</Desig>
                        </Cent>
                    </TextSec>
                </Flex>
            </Container>
        </div>
    )
}

export default Slide

const Cent = styled.div`
    padding:2rem;
    @media (max-width:680px) {
        padding:1rem;
    }
`
const Name = styled.p`
    margin-top: 2.5rem;
    color: #696969;
    text-align: right;
    font-size: 17px;
    `
const Desig = styled(Name)`
margin-top: 0rem;
`

const Flex = styled.div`
    display:flex;
    @media (max-width:950px) {
        flex-direction: column;
    }
    `
const ImgSec = styled.div`
    @media (max-width:950px) {
        display: flex;
        justify-content: center;
    }
    
`
const Img = styled.img`
    height: auto;
    max-width: 25rem;
    width: 100%;
    object-fit: cover;
    margin-bottom:-10px;
`
const TextSec = styled.div`
    flex: 2;
    padding: 2rem;
    padding-right: 3rem;
    display: flex;
    align-items: center;
    @media (max-width:520px) {
       padding: 2rem 0 ;  
    }
`
const Text = styled.p`
    text-align: left;
    border-left: 5px solid #161a1e;
    padding-left: 1rem;
`