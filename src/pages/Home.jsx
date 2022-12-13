import React from 'react'
import Banner from '../components/Banner/Banner'
import Blogs from '../components/Blogs/Blogs'
import Clients from '../components/Clients/Clients'
import ClientStats from '../components/ClientStats/ClientStats'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import ContactUs from '../components/ContactUs/ContactUs'
import MeetingBanner from '../components/MeetingBanner/MeetingBanner'
import Services from '../components/Services/Services'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Works from '../components/Works/Works'

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <ContactBanner />
            <Works />
            <Clients />
            <MeetingBanner />
            <Blogs />
            <ClientStats />
            <WhyChoose />
            <ContactUs />

        </>
    )
}

export default Home