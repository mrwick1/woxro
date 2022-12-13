import React from 'react'
import styled from 'styled-components'
import SingleClient from './SingleClient'

const CLIENT_LIST = [
    {
        image: 'client1',
        url: 'https://articulate.com/'
    },
    {
        image: 'client2',
        url: 'https://www.hyundai.com/in/en'
    },
    {
        image: 'client3',
        url: 'https://www.indianbank.net.in/jsp/startIBPreview.jsp'
    },
    {
        image: 'client4',
        url: 'https://www.bankofbaroda.in/index.htm'
    },
    {
        image: 'client5',
        url: 'https://digitalreasoning.com/'
    },
    {
        image: 'client6',
        url: 'https://www.gemhospitals.com/'
    },
    {
        image: 'client7',
        url: 'https://www.teachaway.com/'
    },
    {
        image: 'client8',
        url: 'https://www.subway.com/en-IN'
    },
    {
        image: 'client9',
        url: 'https://www.smartpets.store/'
    },
    {
        image: 'client10',
        url: 'https://www.argos.co.uk/'
    },
    {
        image: 'client11',
        url: 'https://www.allensolly.com/'
    },
    {
        image: 'client12',
        url: 'https://www.lg.com/in'
    },
    {
        image: 'client13',
        url: 'https://www.ensureacademy.com/'
    },
    {
        image: 'client14',
        url: 'http://www.jaysmedlabs.com/'
    },
    {
        image: 'client15',
        url: 'https://in.bookmyshow.com/'
    },
]

const ClientList = () => {
    return (
        <ClientGrid>
            {CLIENT_LIST.map((client) => {
                return <SingleClient key={client.url} image={client.image} url={client.url} />
            })}
        </ClientGrid>
    )
}

export default ClientList
const ClientGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:1rem;
    @media (max-width:1080px){
        grid-template-columns:repeat(4,1fr);
    }
    @media (max-width:880px){
        grid-template-columns:repeat(3,1fr);
    }
    @media (max-width:680px){
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width:525px){
        grid-template-columns:repeat(1,1fr);
    }
`