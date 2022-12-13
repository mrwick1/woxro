import React from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import BlogList from './BlogList'

const Blogs = () => {
    return (
        <BlogWrapper>
            <Container>
                <TextSec>
                    <H5>READ OUR BLOGS</H5>
                    <H4>Latest news are on top all times</H4>
                </TextSec>
                <BlogList />
                <Readmore>Read more blogs</Readmore>
            </Container>
        </BlogWrapper>
    )
}

export default Blogs

const BlogWrapper = styled.div`
    background-color: #f8f8f8;
    padding-bottom:4rem;
`

const H5 = styled.h5`
    color: #585858;
font-size: .8rem;
letter-spacing: 0.3rem;
text-transform: uppercase;
line-height: 1.43;
margin-bottom: 2rem;
text-align:center;
`

const H4 = styled.h4`
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0.06rem;
    color: #161a1e;
    text-align:center;
`
const TextSec = styled.div`
    padding-block:3rem;
`

const Readmore = styled.a`
    color: #a5a5a5;
    padding: 1rem;
    border: 1px solid #a5a5a5;
    width: auto;
    display: block;
    text-align: center;
    width:fit-content;
    margin-bottom: 2rem;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    margin: auto;
`