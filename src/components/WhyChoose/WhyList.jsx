import React from 'react'
import styled from 'styled-components'
import WhySingle from './WhySingle'

const WHY_LIST = [
    {
        id: '01',
        title: 'Quick response',
        text: ' Exceptionally fast implementation, deployment, and maintenance enables truly agile development',
        img: 'why1',
        background: '#faf6f3',
        idColour: '#eddcd1'
    },
    {
        id: '02',
        title: 'Requirement Gathering',
        text: 'We offer unlimited remote and onsite support with round-the-clock cover as standard and 24/7 options. ',
        img: 'why2',
        background: '#edf2fe',
        idColour: '#b9cefd'
    },
    {
        id: '03',
        title: 'Experienced Staffs',
        text: ' Exceptionally fast implementation, deployment, and maintenance enables truly agile development',
        img: 'why3',
        background: '#fee3ec',
        idColour: '#f7afc5'
    },
    {
        id: '04',
        title: 'Scaleable Platform',
        text: ' The Elastic infrastructure supporting thousands of concurrent users on an up-gradation basis. ',
        img: 'why4',
        background: '#f0f5f4',
        idColour: '#c7dbd7'
    },
    {
        id: '05',
        title: 'Legacy Free',
        text: 'Applications & Platforms that never become obsolete and grow capabilities over time. ',
        img: 'why5',
        background: '#fff5f6',
        idColour: '#f5b4bd'
    },
    {
        id: '06',
        title: '100% Satisfaction',
        text: 'We believe we are nothing without delivery to our clients’ absolute satisfaction. ',
        img: 'why6',
        background: '#fcf7ee',
        idColour: '#f5e1be'
    },
]

const WhyList = () => {
    return (
        <WhyGrid>
            {WHY_LIST.map((item) => {
                return <WhySingle key={item.id} {...item}></WhySingle>
            })}
        </WhyGrid>
    )
}

export default WhyList

const WhyGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    max-width:920px;
    margin:auto;
    gap:1rem;
    margin-top:10px ;
    @media (max-width:900px) {
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width:630px) {
        grid-template-columns:repeat(1,1fr);
    }
`