import React from 'react'
import styled from 'styled-components'
import SingleBlog from './SingleBlog'


const BLOG_LIST = [
    {
        author:'Jacob Roy',
        date:'Sep 12 2022',
        blogImage:'blog1',
        authorImage:'author1',
        title:'The Complete Guide on Communication Tips for Startups',
        content:'Effective Communication tips for startups The art of communication is the... ',
        url:'https://woxro.com/blog/communication-tips-for-startups'
    },
    {
        author:'Teena Merlin',
        date:'Aug 12 2022',
        blogImage:'blog2',
        authorImage:'author2',
        title:'Web 3.0 Marketing Strategy | Digital Marketing Tips',
        content:'The only Web 3.0 marketing Strategy you need Ever had an incident where you... ',
        url:'https://woxro.com/blog/web3-marketing-strategy'
    },
    {
        author:'Aparna M',
        date:'Jul 30 2022',
        blogImage:'blog3',
        authorImage:'author3',
        title:'Top #4 Importance of software quality (July 2022)',
        content:'Top #4 Importance of Software Quality in Business The quality of your software... ',
        url:'https://woxro.com/blog/importance-of-software-quality'
    },
]

const BlogList = () => {
  return (
    <BlogGrid>
        {BLOG_LIST.map((blog)=>{
            return <SingleBlog key={blog.title} {...blog} />
        })}   
    </BlogGrid>
  )
}

export default BlogList
const BlogGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3 , 1fr);
    gap:1rem;
    margin: 1rem;
    padding: 1rem;
    @media(max-width:1130px){
        grid-template-columns:repeat(2 , 1fr);
        margin:0;
        padding:0
    }
    @media(max-width:630px){
        grid-template-columns:repeat(1 , 1fr);

    }
`

