import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import SingleNav from '../HeaderNav/SingleNav'
import { Container } from '../TopBar/TopBar'
import FilterAll from './FilterAll'

const FILTER_NAV = [
    {
        name: 'All',
        url: '/our-works'
    },
    {
        name: 'Ecommerce',
        url: 'ecommerce'
    },
    {
        name: 'Mobile Application',
        url: 'mobile-application'
    },
    {
        name: 'Web Application',
        url: 'web-application'
    },
    {
        name: 'Web Designing',
        url: 'web-designing'
    },
    {
        name: 'IoT & AI',
        url: 'iot-and-ai'
    },
    {
        name: 'Branding & Animations',
        url: 'https://dribbble.com/woxro',
        ext: true
    },
]





const Filter = () => {
    const [active, setActive] = useState('/our-works');
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 220 ? setSticky(true) : setSticky(false)
    };


    return (
        <Sticky sticky={sticky}>
                <List>
                    {FILTER_NAV.map((filter) => {
                        return <SingleNav setActive={setActive} active={active} key={filter.name} {...filter} />
                    })}
                </List>
                <FilterAll />
        </Sticky>
    )
}

 
export default Filter

const List = styled.ul`
    display:flex;
    justify-content:space-between;
    list-style:none;
    padding-block:3rem;
    max-width: 1000px;
    margin:auto;
    @media (max-width:1028px) {
        padding-inline: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width:680px){
        padding-block:1rem;
    }
    a{
        color: #a5a5a5;
        padding-inline: 10px;
        text-decoration:none;
    }
    `
const Sticky = styled.div`
    position: sticky;
    top: 50px;
    max-width: 1200px;
    margin: auto;
    right: 0;
    left: 0;
    z-index: 99999;
    background: #fff;
    padding-block: 0rem;
    @media (max-width:780px) {
        top: 90px;
    }
`