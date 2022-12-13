import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import CareerBanner from '../components/CareerBanner/CareerBanner'
import CareerContact from '../components/CareerContact/CareerContact'
import Filter from '../components/CareerFilter/Filter'
import CareerImages from '../components/CareerImages/CareerImages'
import CareerSlider from '../components/CareerSlider/CareerSlider'
import { Container } from '../components/TopBar/TopBar'

const Careers = () => {
    return (
        <div>
            <Container>
                <SubTitle>Careers</SubTitle>

                <Outlet />
                <Filter />
            </Container>
            <CareerBanner />
            <Container>
                <CareerImages />
            </Container>
            <CareerContact />
            <CareerSlider />
        </div>
    )
}

export default Careers

export const SubTitle = styled.h4`
    text-align: center;
    color: #585858;
    font-size: .8rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 2;
    margin-top: 3rem;
    margin-bottom:1rem
`
