import React from 'react'
import styled from 'styled-components'

const SingleBlog = ({ url, author, date, blogImage, authorImage, title, content }) => {

    return (
        <BlogCard href={url}>
            <ImgCont>
                <Img src={`/src/assets/${blogImage}.png`} alt="" />
            </ImgCont>
            <BlogCont>
                <Flex>
                    <ProfileImg src={`/src/assets/${authorImage}.png`} />
                    <AuthorDet>
                        <AuthorName>{author}</AuthorName>
                    <AuthorDet>{date}</AuthorDet>
                    </AuthorDet>
                </Flex>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </BlogCont>
        </BlogCard>
    )
}

export default SingleBlog

const Content = styled.p`
    margin-top: 1rem;
    color: #464545;
letter-spacing: 0.06rem;
font-size: 0.775rem;
`

const Title = styled.h6`
    font-size:1rem;
    font-weight: 600;
    color: #161a1e;
`

const AuthorDet = styled.div`
    color: #696969;
    letter-spacing: 0.06rem;
    font-size: 0.675rem;
`
const AuthorName = styled.span`
    color: #a5a5a5;
    letter-spacing: 0.06rem;
    font-size: 0.675rem;
`

const BlogCard = styled.a`
    margin-bottom: 20px;
    text-decoration:none;
    background-color:#fff;
`
const ImgCont = styled.div`
    overflow:hidden;
    height: 245px;
`
const Img = styled.img`
    width:100%;
    object-fit:cover;
    height:100%;
    &:hover{
        transform:scale(1.02)
    }
`
const ProfileImg = styled.img`
    height:32px;
    width:32px;
    border-radius:50px;
    object-fit:cover;
`
const BlogCont = styled.div`
    margin: 0.5rem;
    padding-inline: 0.8rem;
    padding-bottom: 1.5rem;
`
const Flex = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    padding-block: 1rem;
`