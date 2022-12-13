import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SingleFilter = ({ name, type, desc, url }) => {
    return (
        <VacCard>
            <VacTitle>{name}</VacTitle>
            <Type>{type}</Type>
            <Desc>{desc}</Desc>
            <Button>
                <Link to={url}>Apply Now</Link>
            </Button>
        </VacCard>
    )
}

export default SingleFilter

const VacCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 8px;
    height: 330px;
    border: 1px solid #eee;
    a{
        font-size: 0.7rem;
        padding: 12px 20px;
        margin: 0.5rem;
        box-sizing: border-box;
        color: #161a1e;
        border: 1px solid #161a1e;
        transition: color 0.3s;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.3s;
        text-decoration:none;
        width:fit-content;
    }
`

const Button = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

`
const VacTitle = styled.h3`
    color: #000;
    padding:1rem;
    padding-bottom:0;
`
const Type = styled.p`
    color: #161a1e;
    text-transform: uppercase;
    font-size: 12px;
    padding:1rem;
    padding-top:0;
`
const Desc = styled.p`
    font-size: 0.775rem;
    color: #464545;
    margin-inline: 1rem;
    margin-top: 0.001rem;
    margin-bottom: 0.1rem;
    letter-spacing: 0.06rem;
`