import React from 'react'
import styled from 'styled-components'

const SingleWork = ({ title, image, type, url }) => {
    return (
        <a href={url}><WorkCard>
            <ImgCont>
            <img src={`/src/assets/${image}.png`} alt={title} />
            </ImgCont>
            <WorkCont>
                <h6>{title}</h6>
                <p>{type}</p>
            </WorkCont>
        </WorkCard></a>
    )
}

export default SingleWork


const WorkCard = styled.div`
    margin-block: 0.8rem;
    margin: 0.5rem;
    background-color: #fff;
    transition:all .1s ease;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 5px 5px 0 rgba(0, 0, 0, 0.05);
    }
`
const ImgCont = styled.div`
    overflow:hidden;
`
const WorkCont = styled.div`
    padding:1rem;
    background-color:#fff;
    h6{
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        color: #464545;
        letter-spacing: 0.06rem;
    }
    p{
        font-size: 0.95rem;
        padding: 0.5rem;
        color: #585858;
        letter-spacing: 0.04rem;
        text-align:left;
        margin:unset !important;   
        text-align:left !important;
    }
`