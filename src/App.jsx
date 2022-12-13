import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeaderNav from './components/HeaderNav/HeaderNav'
import TopBar from './components/TopBar/TopBar'
import Home from './pages/Home'
import OurWorks from './pages/OurWorks'
import ContactUs from './components/ContactUs/ContactUs'
import FilterAll from './components/Filter/FilterAll'
import { Main, Texts } from './components/CareerFilter/ApplyForm'
import './App.css'
import Careers from './pages/Careers'
import ApplyForm from './components/CareerFilter/ApplyForm'
import Blogs from './pages/Blogs'



const App = () => {



  return (
    <MainWrapper>
      <TopBar />
      <Header />
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<h1>Aboutpage</h1>} />
        <Route path='/ourworks' element={<h1>Our Works</h1>} />
        <Route path='/services' element={<h1>Services Page</h1>} />
        <Route path='/technology' element={<h1>technology Page</h1>} />
        <Route path='/careers' element={<Careers />}>
          <Route index element={
            <>
            <Texts />
            <Main />
            </>
          } />
          <Route path=':position' element={<ApplyForm />}>

          </Route>
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/our-works' element={<OurWorks />}>
          <Route index element={<FilterAll type='all' />} />
          <Route path='ecommerce' element={<FilterAll type='ecommerce' />} />
          <Route path='mobile-application' element={<FilterAll type='mobile-application' />} />
          <Route path='web-application' element={<FilterAll type='web-application' />} />
          <Route path='web-designing' element={<FilterAll type='web-designing' />} />
          <Route path='iot-and-ai' element={<FilterAll type='iot-and-ai' />} />
        </Route>
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />

    </MainWrapper>
  )
}

export default App

const MainWrapper = styled.div`
  max-width:1200px;
  margin:auto;
  background-color:#fff;
`