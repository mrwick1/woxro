import React from 'react'
import BlogAll from '../components/BlogAll/BlogAll'
import { MainTitle } from '../components/CareerFilter/ApplyForm'
import { SubTitle } from './Careers'

const Blogs = () => {
  return (
    <div>
      <SubTitle>BLOG</SubTitle>
      <MainTitle>Get updated on what is happening around.</MainTitle>
      <BlogAll />
    </div>
  )
}

export default Blogs

