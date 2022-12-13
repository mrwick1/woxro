import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexCenter } from '../TopBar/TopBar'
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';


const SingleButton = ({ icon, url, name }) => {
    return (
        <Link to={url}>
            <Button>
                <FlexCenter>
                    {icon === 'phone' ? <FaPhoneAlt /> : <BsFillChatFill />}
                    <span>{name}</span>
                </FlexCenter>
            </Button>
        </Link>
    )
}

export default SingleButton

const Button = styled.button`
    display: flex;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
    width: 10rem;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
    span{
        font-size: 16px;
    }
    &:hover{
        border: 1px solid #fff;
        color:#000;
        background-color:#fff;
    }
`