import React, { useEffect } from 'react'
import { Container } from '../TopBar/TopBar'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import { NAVIGATION_ITEMS } from '../HeaderNav/HeaderNav'
import SingleNav from '../HeaderNav/SingleNav'


const Header = () => {
    const [isOpen , setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? setSticky(true) : setSticky(false)
    };
    return (
        <HeaderSticky sticky={sticky}>
            <Container>
                <PaddingIn>
                    <FlexBetween>
                    <img src="/src/assets/woxrologo.png" alt="" />
                    <Menu onClick={()=>{
                        setIsOpen(!isOpen)
                    }}><GiHamburgerMenu /></Menu>
                    </FlexBetween>
                </PaddingIn>
            </Container>
            <MenuSlide isOpen={isOpen} >
                   <Close onClick={()=>{
                        setIsOpen(!isOpen)
                    }} >
                    <IoClose />
                    </Close>
                    <List>
                        {NAVIGATION_ITEMS.map((item =>{
                            return <SingleNav setIsOpen={setIsOpen} {...item} key={Math.random()} />
                        }))}
                    </List>
                    
            </MenuSlide>
        </HeaderSticky>
    )
}

export default Header


const MenuSlide = styled.div`
    height:100vh;
    width:250px;
    position:fixed;
    transform:${props=>props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    right:0;
    top:0;
    z-index:99999999999;
    background-color:#000;
    overflow-x: hidden;
    transition: all  0.5s linear;
    padding-top: 2rem;
`

const PaddingIn = styled.div`
    padding:25px 15px;
    img{
        width:205px
    }
`
const FlexBetween = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Menu = styled.div`
    display:none;
    cursor: pointer;
    svg{
        height: 30px;
        width: 30px;
    }
    @media (max-width:840px) {
        display:block;
    }
`
const Close = styled.div`
    color: #969696;
    svg{
        height: 30px;
        width: 30px;
    }
    :hover{
            color:#fff;
        }
    width:fit-content;
    cursor: pointer;
    padding: 8px 8px 8px 32px;
`
const List = styled.div`
    a{
        color: #969696;
        text-decoration:none;
        padding: 8px 8px 8px 32px;
        display:block;
        width:fit-content;  
        &:hover{
            color:#fff;
        }
    }
`
const HeaderSticky = styled.div`
    position:static;
    top:0;
    right:0;
    left:0;
    z-index:99999999;
    background-color:#fff;
    @media (max-width:780px) {
        position:${props=>props.sticky ? 'fixed' : 'static'};
    }
` 