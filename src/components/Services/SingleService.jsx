import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ServiceCard = styled.div`
    border: thin #696969;
    border-radius: 5px;
    width: auto;
    height: 15rem;
    margin: 0.5rem;
    padding: 1rem;
    transition: 0.3s;
    background-color:${props => props.backgroundColor };
    h5{
        font-size: 1.27rem;
        font-weight: bold;
        color: #000;
        margin-bottom: 0.5rem;
        text-transform:capitalize;
    }
`
    const TextTrunk = styled.div`
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        p{
            font-size:.8rem;
            color:#000
        }
`

const SingleService = ({ icon, title, description, backgroundColor }) => {
    
    return (
        <Link to={title.replace(' ', '-')}>
            <ServiceCard backgroundColor={backgroundColor}>
                <img src={`/src/assets/${icon}.png`} alt="" />
                <h5>{title}</h5>
                <TextTrunk>
                    <p>{description}</p>
                </TextTrunk>
            </ServiceCard>
        </Link>
    )
}

export default SingleService


