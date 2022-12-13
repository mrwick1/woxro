import React from 'react'
import styled from 'styled-components'
import SingleNav from './SingleNav'

const EXPLORE_NAV = [
    {
        name: 'Our Company',
        url: 'ourcompany'
    },
    {
        name: "Founder's Letter",
        url: 'foundersletter'
    },
    {
        name: 'Accessibility',
        url: 'accessibility'
    },
    {
        name: 'Client Portal',
        url: 'client-login'
    },
    {
        name: 'Woxzine e-magazine',
        url: 'woxzine'
    },
    {
        name: 'Get a quote  ',
        url: 'quote'
    },
    {
        name: 'Woxhost',
        url: 'hosting'
    }
]

const QUICK_NAV = [
    {
        name: 'Home',
        url: ''
    },
    {
        name: 'About Us',
        url: 'aboutus'
    },
    {
        name: 'Services',
        url: 'service'
    },
    {
        name: 'Technology',
        url: 'technology'
    },
    {
        name: 'Careers',
        url: 'careers'
    },
    {
        name: 'Our Works',
        url: 'our-works'
    },
    {
        name: 'Contact us',
        url: 'contactus'
    },
]

const SERVICES_NAV = [
    {
        name: 'Web Designing',
        url: 'Web-Designing'
    },
    {
        name: 'Web Application',
        url: 'Web-Application'
    },
    {
        name: 'Mobile Applications',
        url: 'Mobile-Applications'
    },
    {
        name: 'Ecommerce Development',
        url: 'Ecommerce-Development'
    },
    {
        name: 'Digital Marketing',
        url: 'Digital-Marketing'
    },
    {
        name: 'AI & ML Development',
        url: 'AI-and-ML-Development'
    },
    {
        name: 'Hosting',
        url: 'hosting'
    },
]

const SUPPORT_NAV = [
    {
        name: 'COVID-19 Response',
        url: 'covid19response'
    },
    {
        name: 'Refund Policy',
        url: 'refundpolicy'
    },
    {
        name: 'Privacy Policy',
        url: 'privacypolicy'
    },
    {
        name: 'Terms of Service',
        url: 'tos'
    },
    {
        name: 'Payment Gateway',
        url: 'https://pages.razorpay.com/woxro'
    },
    {
        name: 'FAQ',
        url: 'faq'
    },
    {
        name: 'Knowledge Base',
        url: 'knowledgebase'
    },
]



const   NavGrid = () => {
    return (
        <GridNav>
            <SingleNav title='Explore' type='nav-links' data={EXPLORE_NAV} />
            <SingleNav title='Quick Links' type='nav-links' data={QUICK_NAV} />
            <SingleNav title='Explore' type='nav-links' data={SERVICES_NAV} />
            <SingleNav title='Support' type='nav-links' data={SUPPORT_NAV} />
        </GridNav>
    )
}

export default NavGrid

const GridNav = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    padding-bottom:2rem;
    @media (max-width:940px) {
        grid-template-columns:repeat(3,1fr);
        row-gap:2rem;
    }
    @media (max-width:740px) {
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width:540px) {
        grid-template-columns:repeat(1,1fr);
    }
`
