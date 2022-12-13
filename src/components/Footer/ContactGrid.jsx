import React from 'react'
import styled from 'styled-components'
import SingleNav from './SingleNav'

const LOCATION_NAV = [
    {
        name:'Leshore Business Park '
    },
    {
        name:'Thrissur 680004'
    },
    {
        name:'Kerala, India'
    }
]

const CONTACT_NAV = [
    {
        name:'Office',
        ph:'+91 487 2080 212'
    },
    {
        name:'HR',
        ph:'+91 7994 468821'
    },
    {
        name:'Sales',
        ph:'+91 8606 588821 '
    },
    {
        name:'UAE',
        ph:'+971 5825 04982 '
    },
]

const CONTACT_DATA = [
    {
        name:'linkedin',
        url: 'https://www.linkedin.com/company/woxrotechnologysolutions',
        color:'#0077b5'
    },
    {
        name:'facebook',
        url: 'https://www.facebook.com/woxro',
        color:'#4267B2'
    },
    {
        name:'twitter',
        url: 'https://twitter.com/Woxroglobal',
        color:'#00acee'
    },
    {
        name:'dribble',
        url: 'https://dribbble.com/woxro',
        color:'#ea4c89'
    },
    {
        name:'behance',
        url: 'https://www.behance.net/woxro',
        color:'#053eff'
    },
]


const ContactGrid = () => {
  return (
    <Grid>
        <SingleNav title='Office Address' data={LOCATION_NAV} type='location' />
        <SingleNav title="Let's Talk" data={CONTACT_NAV} type='phone' />
        <SingleNav title="Get connected with us" data={CONTACT_DATA} type='connect' src='https://widget.clutch.co/widgets/get/2?ref_domain=woxro.com&uid=1823545&theme=light_gray&rel_nofollow=true&ref_path=/' />
    </Grid>
  )
}

export default ContactGrid

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin-top:2rem;
    @media (max-width:720px) {
        grid-template-columns:repeat(2,1fr);
        row-gap:2rem
    }
    @media (max-width:510px) {
        grid-template-columns:repeat(1,1fr);
    }
`