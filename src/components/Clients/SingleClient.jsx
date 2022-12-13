import React from 'react'
import styled from 'styled-components'

const SingleClient = ({image , url}) => {
  return (
    <Link href={url}>
        <Image src={`src/assets/${image}.png`} alt="" />
    </Link>
  )
}

export default SingleClient

const Link = styled.a`
    text-decoration:none;
    width: 100%;
    min-width: 12rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #f8f8f8;
`
const Image = styled.img`
    filter: grayscale(100%);
    &:hover{
        filter: grayscale(0%);
    }
`