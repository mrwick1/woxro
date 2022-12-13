import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ContactUs from '../components/ContactUs/ContactUs'
import Filter from '../components/Filter/Filter'
import OurBanner from '../components/OurBanner/OurBanner'

const OurWorks = () => {
  return (
    <div>
        <OurBanner />
        <Filter />
        <Outlet />
        <ContactUs />
    </div>
  )
}

export default OurWorks