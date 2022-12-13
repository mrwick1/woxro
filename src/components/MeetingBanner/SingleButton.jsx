import React from 'react'
import styled from 'styled-components'

const SingleButton = ({text , url}) => {
    return (
        <Link href={url}>
            {text}
        </Link>
    )
}

export default SingleButton

const Link = styled.a`
    text-decoration: none;
    display: flex;
    border: solid 1px #fff;
    width: 170px;
    margin-block: 2rem;
    padding: 1rem;
    font-size: 0.8rem;
    background-color: transparent;
    transition: all 0.3s;
    letter-spacing: 0.06rem;
    margin-right: 1rem;
    justify-content: center;
    border-radius: 5px;
    color:#fff;
    &:hover{
        color: #696969;
        border: solid 1px #696969;
    }
    @media(max-width:880px){
        margin-block: 0rem;
}
`