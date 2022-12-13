import React from 'react'
import { Container } from '../TopBar/TopBar'
import styled from 'styled-components'
import SingleService from './SingleService'

const SERVICES_LIST = [
    {
        icon:'serv1',
        title:'web designing',
        description: 'We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.',
        backgroundColor: '#e7f0f7'
    },
    {
        icon:'serv2',
        title:'Web Application',
        description: 'We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.',
        backgroundColor: '#f6f5f3'
    },
    {
        icon:'serv3',
        title:'Mobile App Development',
        description: 'We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.',
        backgroundColor: '#f6f5f3'
    },
    {
        icon:'serv4',
        title:'Ecommerce Development',
        description: 'For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.',
        backgroundColor: '#fcf0e4'
    },
    {
        icon:'serv5',
        title:'Digital Marketing',
        description: 'We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.',
        backgroundColor: '#f5f6f8'
    },
    {
        icon:'serv6',
        title:'Graphic Designing',
        description: 'We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. ',
        backgroundColor: '#effbfb'
    },
]


const Services = () => {
    return (
        <ServicesWrapper>
            <Container>
                <h4>services we deliver</h4>
                <h3>Preparing for your success, we provide truly prominent IT solutions.</h3>
                <ServicesList>
                    {SERVICES_LIST.map((service)=>{
                        return <SingleService key={service.title} icon={service.icon} title={service.title} description={service.description} backgroundColor={service.backgroundColor}   />
                    })}
                </ServicesList>
            </Container>
        </ServicesWrapper>
    )
}

export default Services


const ServicesWrapper = styled.div`
    padding: 3rem;
    h4{
        font-size:.8rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        line-height: 1.43;
        margin-bottom: 2rem;
        color:#585858;
        text-align:center;
    }
    h3{
        font-size: 2rem;
        letter-spacing: 0.06rem;
        max-width: 800px;
        margin:auto;
        text-align:center;
    }
    a{
        text-decoration:none
    }
    @media (max-width:1200px){
        padding:3rem 0 0 0 ;
    }   
`

const ServicesList = styled.div`
    display: grid;
    padding:2rem 2rem 6rem;
    grid-template-columns:repeat(3,1fr);
    @media (max-width:1200px){
        padding:2rem 0 6rem;
    }
    @media (max-width:1040px){
        grid-template-columns:repeat(2,1fr);
        padding:2rem 0;
    }
    @media (max-width:690px){
        grid-template-columns:repeat(1,1fr);
    }
`