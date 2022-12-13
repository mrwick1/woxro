import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Slide from './Slide';
import 'swiper/css';


const SWIPER_DATA = [
    {
        name: 'Aneesha Jenson',
        img: 'slider1',
        desig: 'Senior Project Head, DevOps Department',
        text: '"The life at Woxro is amazing, apart from work the company also gives us the chance to entertain and feel joyful by arranging celebrations and events. I highly recommend Woxro to anyone who needs to take their career to an elite level."'
    },
    {
        name: 'Agnel Babu',
        img: 'slider2',
        desig: 'Associate Developer, DevOps Department',
        text: '"I am working with a great team. I don t find any ups and downs here, everything is very smooth. Got many opportunities to learn and evolve. Great place to work!"'
    },
    {
        name: 'Antony Joy',
        img: 'slider3',
        desig: 'Business Analyst, R&D Department',
        text: '"Great company to work for and plenty of potentials. I have been working here for more than a year. Great team who are always helpful and supportive. Join us if you are looking for a platform to grow and develop."'
    },
]

const CareerSlider = () => {
    return (
        <div>
            <Swiper spaceBetween={50} slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {SWIPER_DATA.map((item) => {
                    return <SwiperSlide key={Math.random()}> <Slide {...item} /></SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default CareerSlider