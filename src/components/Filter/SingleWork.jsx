import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../TopBar/TopBar'

const SingleWork = ({ title, type, text, img, url, vid, comingSoon }) => {

  if (type === 'ecommerce') {
    var icon = 'ecom';
    var subTitle = 'Ecommerce'
  } else if (type === 'mobile-application') {
    var icon = 'mob';
    var subTitle = 'Ecommerce'
  } else if (type === 'web-application') {
    var icon = 'weba';
    var subTitle = 'Web Application'
  } else if (type === 'web-designing') {
    var icon = 'webd';
    var subTitle = 'Web Designing'
  } else if (type === 'iot-and-ai') {
    var icon = 'iot';
    var subTitle = 'Internet of Things & \n \n Artificial Intelligence'
  }


  return (
    <FLexAlt >
      <ImgCont>
        {img ? <Img  src={`/src/assets/${img}.png`} /> : <Video autoPlay src={`/src/assets/${vid}.MOV`} />}
      </ImgCont>
      <TextCont>
        <div>
          <FlexCenter>
            <Icon src={`/src/assets/${icon}.png`} />
            <SubTitle >
              {subTitle}
            </SubTitle>
          </FlexCenter>
          <Title>{title}</Title>
          <Text>
            {text}
          </Text>
        </div>
        {url && url.includes('play.google.com') ? <A target='blank_' href={url}>Download App</A> : url && <A target='blank_' href={url}>View Site </A>  }
        { comingSoon && <A target='blank_' style={{cursor:'default'}}>Coming soon</A>  }
        
      </TextCont>
    </FLexAlt>
  )
}

export default SingleWork

const A = styled.a`
  padding: 10px 18px;
  margin: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #464545;
  font-size: 0.9rem;
  border: 1px solid #464545;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-left: 0rem;
  margin-top: 5rem;
  background-color: transparent;
  max-width: 10rem;
  margin-left: 20px;
  text-decoration:none;
`

const Title = styled.h3`
  font-size: 2rem;
  color: #000;
  letter-spacing: 0.05em;
  margin-block: 30px;
`
const Text = styled.p`
  font-size: 14px;
  color: #464545;
  line-height: 2.1;
  font-weight: 400;
  letter-spacing: 0.05em;
`


const FLexAlt = styled.div`
  display:flex;
  justify-content:space-between;
  @media (max-width: 768px) {
    flex-direction:column
  }
`
const Img = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
`
const Video = styled.video`
  height:590px;
  width:100%;
  object-fit:cover;
`
const ImgCont = styled.div`
  width:50%;
  height:590px;
  @media (max-width: 768px) {
    width:100%;
  }
`
const TextCont = styled.div`
  padding: 2rem;
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media (max-width: 768px) {
    width:100%;
  }
`
const Icon = styled.img`
  height: 50px;
  width: 50px;
  opacity: 0.6;
  object-fit: contain;
`
const SubTitle = styled.p`
  font-size: 14px;
  margin-left: 15px;
  color: #a7a3a3;
  letter-spacing: 1.1px;
  word-spacing:9999;
`