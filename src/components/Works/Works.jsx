import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import SingleWork from './SingleWork'


const OUR_WORKS = [
    {
        title: 'Boohoo',
        image: 'work1',
        type: 'E-commerce Website',
        url: 'https://www.boohoo.com/'
    },
    {
        title: 'Ashtead',
        image: 'work2',
        type: 'Web Application',
        url: 'https://www.ashtead.link/'
    },
    {
        title: 'Dailytips',
        image: 'work3',
        type: 'Mobile Application',
        url: 'https://www.dailytips.link/'
    }
]


const Works = () => {
    return (
        <WorksWrapper>
            <Container>
                <h5>our recent works</h5>
                <h3>Proud projects that make us stand out</h3>
                <p> To achieve and maintain high standards we are committed to investing in the most talented IT support specialists in India, with the experience, creativity, and qualifications to exceed the highest expectations. We are known for our works and we hope you enjoy looking at some of our recent works.</p>
                <WorkGrid>

                    {OUR_WORKS.map((work) => {
                        return <SingleWork key={work.title} {...work} />
                    })}
                </WorkGrid>
                <Link to='/ourworks'><ViewMore>View Projects</ViewMore></Link>
            </Container>
        </WorksWrapper>
    )
}

export default Works

const WorksWrapper = styled.div`
    padding-top:3em;
    background-color:#f8f8f8;
    padding-bottom:3rem;
    h5{
        color: #585858;
        font-size: .8rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        line-height: 1.43;
        margin-bottom: 2rem;
        text-align:center;
    }
    h3{
        font-size: 2rem;
        line-height: 1.5;
        letter-spacing: 0.06rem;
        text-align:center;
        margin-bottom:2rem
    }
    p{
        text-align: center;
        font-size: 0.875rem;
        color: #464545;
        width: 80%;
        margin: auto;
        margin-bottom: 2rem;
        letter-spacing: 0.06rem;
        @media(max-width:600px){
            width:100%
        }
    }
    a{
        text-decoration:none;
        cursor: default;
        height: fit-content;

    }
`

const WorkGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:space-around; 
    gap:1rem;
    @media(max-width:880px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:660px){
        grid-template-columns:repeat(1,1fr);
    }
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
        transition:all .3s ease;
        &:hover{
            transform:scale(1.01)
        }
    }  
`
const ViewMore = styled.span`
    background-color: #f8f8f8;
    color: #696969;
    border: 1px solid #696969;
    border-radius: 5px;
    padding: 14px 50px;
    font-size: 16px;
    cursor: pointer;
    margin: auto;
    display: block;
    width: fit-content;
    margin-top: 5rem;
    display: block;
    &:hover{
        color:#000;
    }
`