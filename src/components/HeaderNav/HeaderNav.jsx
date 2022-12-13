import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import SingleNav from './SingleNav'


export const NAVIGATION_ITEMS = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About Us',
        url: '/about-us'
    },
    {
        name: 'Services',
        url: '/services'
    },
    {
        name: 'Technology',
        url: '/technology'
    },
    {
        name: 'Careers',
        url: '/careers'
    },
    {
        name: 'Blogs',
        url: '/blogs'
    },
    {
        name: 'Our Works',
        url: '/our-works'
    },
    {
        name: 'Contact Us',
        url: '/contact-us'
    },
]


const HeaderNav = () => {
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
        <NavBar sticky={sticky}>
            <Container>
                <NavList>
                    {NAVIGATION_ITEMS.map((item) => {
                        return <SingleNav key={item.name} name={item.name} url={item.url} />
                    })}
                </NavList>
            </Container>
        </NavBar>
    )
}

export default HeaderNav

const NavBar = styled.div`
    background-color:#000;
    padding: 15px;
    position: ${props => props.sticky ? 'fixed' : 'static'};
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999999999;
    @media (max-width:780px){
        display:none
    }
`
const NavList = styled.ul`
    list-style:none;
    display:flex;
    justify-content:space-evenly;
    a{
        text-decoration:none;
        color:#fff;
    }
    @media (max-width:950px) {
        justify-content:space-between;
    }
`