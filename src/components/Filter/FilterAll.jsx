import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../TopBar/TopBar'
import SingleWork from './SingleWork'

export const OUR_WORKS = [
    {
        title: 'KeyHealth',
        type: 'web-designing',
        text: 'Kangen Water is an ionized alkaline water that is clean, and pure. Enagic means water that is clean, free from contaminants, rich in minerals, and delicious for everyone. Balanced pH levels, helping losing weight, helps to control your aging skin to glow, detoxification , helping in improving the immune system, helping in hydration altogether makes kangen water better and best. Kangen water is the alkaline water that has antioxidants which is great for... ',
        img: 'webd1',
        url:'https://keyhealth.today/'
    },
    {
        title: 'J & M',
        type: 'web-designing',
        text: 'We are J & M Business Consultants in aim to Finance your Startup in emerging markets. We are the startup studio with a mission to partner with the best founders connecting them with ideas & placing them in unparalleled eco system of company builders and resources for growth. Through collaboration and targeted programming, we are the hub that will be an engine for new economic growth and job creation ',
        img: 'webd2',
        url:'https://www.jandmconsultants.online/'
    },
    {
        title: 'Entice Workspaces',
        type: 'web-designing',
        text: 'Be confident of getting to work and for meetings on time. We are always ready to help you get to your office. Entice Workspaces are beautifully designed workspaces created to facilitate new connections, also they are offering office and commercial spaces for rent for startups and corporate companies. Equipped with the latest technology and modern facilities in meeting rooms also 6-10 seater arrangements. ',
        img: 'webd3',
        url:'https://www.enticeworkspaces.com/'
    },
    {
        title: 'English Corner',
        type: 'web-designing',
        text: 'With experts and experienced talented professionals, The english corner is the perfect place to improve your english skills. We have all the solutions for your English language problems. We provide the best spoken English, IELTS and business English with our in-house experts. We began our journey with a humble endeavour to help students achieve their goals and dreams by helping them to expertise in English in an astounding way. ',
        img: 'webd4',
        url:'https://theenglishcorner.in/'
    },
    {
        title: 'Aramco',
        type: 'web-designing',
        text: 'They are leading producer of the energy and chemicals that drive global commerce and enhance the daily lives of people around the globe by continuing delivering an uninterrupted supply of energy to the world.Their resilience and agility has built one of the world’s largest integrated energy and chemicals companies. And they are part of the global effort toward building a low carbon economy. ',
        vid: 'webd5',
        url:'https://www.aramco.com/',
        img:null
    },
    {
        title: 'Healthy Homes',
        type: 'web-designing',
        text: 'Healthy Homes is New Zealands first private home renovation agency to hit a customer base of 5000 works in different domains of renovation. The team at Healthy Homes brings together a highly specialized set of skills that uniquely qualify them to manage their next renovation project. ',
        img: 'webd6',
        url:'https://www.myhealthyhomes.co.nz/'
    },
    {
        title: 'Clove Dental Clinic',
        type: 'web-designing',
        text: 'The Vision of Clove Dental Clinic is to remove barriers that seem to get in the way when it comes to a patient’s ability to maintain a healthy smile. Clove Dental Clinic is created with the mission to exceed expectations by providing exceptional dental care to our patients and at the same time, building relationships of trust with them. We are passionate about what we do and we want our patients to feel confident that they will receive the best care...',
        img: 'webd7',
        url:'http://www.clovedentists.com/'
    },
    {
        title: 'Medon Pharmacy',
        type: 'web-designing',
        text: 'We are one of the Retail Pharmacy Groups in the UAE with 16 Outlets and over 600+ active company clients and over 50+ Insurance coverages. We are recognized by Dubai Health Authority, the Minister of Health, UAE, and the Dubai Government in providing top-class pharmaceutical products.“Medon Pharmacies” was started in the year 2012 in Dubai. It is a leading Retail Pharmacy Group in the UAE with 16 Outlets. ',
        img: 'webd8',
        url:'https://www.medon.ae/'
    },
    {
        title: 'Ensure Academy',
        type: 'web-designing',
        text: 'With extensive experience in education services, the team at “Ensure Academy” is mindful of the expectations of every student and the turmoil they go through in the process of selecting the right career ahead. Ensure Academy provides the best support for students and professionals planning to study, work or immigrate to the UK / Australia / New Zealand / Canada and other countries bypassing the IELTS, OET and other Foreign language exams. ',
        img: 'webd9',
        url:'https://www.ensureacademy.com/'
    },
    {
        title: 'University of London',
        type: 'web-designing',
        text: 'We are one of the largest, most diverse universities in the UK with over 120,000 students in London, and a further 50,000 studying across 190 countries for a University of London degree.Today, the University of London is addressing the challenges of an ever-changing national and international landscape in higher education; and responding to the shifting needs of students and researchers across the world. ',
        img: 'webd10',
        url:'https://london.ac.uk/'
    },
    {
        title: 'Zenni Optical',
        type: 'ecommerce',
        text: 'Zenni optical is a good Ecommerce website. Everyone should have access to high-quality, affordable eyeglasses, With prices affordable prices for single-vision prescription glasses, you don’t have to limit yourself to just one pair when you order glasses online. At Zenni, we believe everyone should have access to high-quality, affordable eyeglasses. With the affordable price for single-vision prescription glasses, you dont have to limit yourself to just ..',
        img: 'ecom1',
        url:'https://www.zennioptical.com/'
    },
    {
        title: 'Boohoo',
        type: 'ecommerce',
        text: 'Boohoo was launched in 2006 and has been the best fashion bestie for people of the UK. Boohoo’s core products include dresses and tops, with a selection of over 27,000 styles of clothing. Boohoo has been criticized for promoting fast fashion which critics claim comes at a cost to those making the clothes and the environment. In the 10 months to December 2013, Boohoo had sales totaling £92m, with a profit before charges of £10m. ',
        img: 'ecom2',
        url:'https://www.boohoo.com/'
    },
    {
        title: 'Smart Pets India',
        type: 'ecommerce',
        text: 'Smart Pets India is Kerala s first eCommerce website for pets. It provides a plethora of items for your lovable pets. It is created with the mission to deliver the best products and services for pets and pet lovers all over India. Smartpets is created with the mission to deliver the best products and services for pets and pet lovers all over India. We are offering a comprehensive range of products for your lovable pets. As Smartpets is in the nascent stage, we aim to ...',
        img: 'ecom3',
        url:'https://www.smartpets.store/'
    },
    {
        title: 'Currys',
        type: 'ecommerce',
        text: 'Currys plc is a leading omnichannel retailer of technology products and services, operating through online and 829 stores in 7 countries. We help everyone enjoy amazing technology, however they choose to shop with us. They build customer relationships that are stickier and more valuable over time, in all geographies that they operate . ',
        img: null,
        vid:'ecom4',
        url:'https://www.currysplc.com/'
    },
    {
        title: 'Menu.am',
        type: 'mobile-application',
        text: 'Order delivery of your favourite dishes from more than 400 restaurants in Yerevan, using the mobile application of the leading delivery service Menu.am. Average delivery time is 30 minutes from the nearest restaurants . They deliver hot food in our special thermo-bags. Pay for the order with cash, a credit card, or with the help of other payment systems. ',
        img: 'mob1',
        url:'https://play.google.com/store/apps/details?id=am.menu.app'
    },
    {
        title: 'Swell',
        type: 'mobile-application',
        text: 'Swell discover a whole new world of audio - short and thoughtful audio conversations on a wide range of topics from all over the world. They also discover a new way to talk - listen anytime and reply anytime to any conversation. No scheduling. No missing out. Easily start new conversations with a short audio post. Invite your friends or connect with new users with similar interests. Posts can be up to 5 min long and can include a photo and description. ',
        img: 'mob2',
        url:'https://play.google.com/store/apps/details?id=life.swell.swellapp'
    },
    {
        title: 'Dailytips',
        type: 'mobile-application',
        text: ' Dailytips is a social media community platform for sharing your day-to-day tips on various topics. where people around the world come together to type, read and learn from each other in real-time. It’s a place to meet with friends and with new people to share your day-to-day easy doing tips. With no camera on and sound on, you don’t have to worry about eye contact, what you’re wearing, or where you are, or what you talk about. ',
        img: 'mob3',
        url:'https://play.google.com/store/apps/details?id=com.woxro.dailytip'
    },
    {
        title: 'Crate&Barrel',
        type: 'mobile-application',
        text: 'Crate and Barrel Holdings is an international home decor store headquartered in Northbrook, Illinois. They employ 7500 employees over 100 stores in the United States and Canada, with franchises in countries in Europe. Gordon and Carole Segal opened the first Crate & Barrel store on December 7, 1962.They became interested in providing functional yet aesthetically pleasing products to young couples just starting out. Surprised to see that European ..',
        img: 'mob4',
        url:null,
        comingSoon:true,
    },
    {
        title: 'Capital.com',
        type: 'mobile-application',
        text: 'Capital.com is a multi-award-winning* online broker that is here to transform trading. The Capital.com Group has offices located in the UK, Cyprus, Belarus and Australia where each entity is authorised and regulated by the Financial Conduct Authority (FCA), the Cyprus Securities and Exchange Commission (CySEC) the National Bank of the Republic of Belarus (NBRB) and the Australian Securities and Investments Commission (ASIC) respectively. ',
        img: 'mob5',
        url:'https://play.google.com/store/apps/details?id=com.capital.trading'
    },
    {
        title: 'Woxdoc',
        type: 'web-application',
        text: 'Woxdoc delivers the Total Hospital Information System platform purpose-built to meet the needs of independent solutions. Now with Woxdoc, practicians can effortlessly manage all major functions through one intuitive platform. Woxdoc helps doctors deliver high-quality care by organizing the moment of care for maximum clinical productivity, performing administrative and quality services on a doctor s behalf to ensure full payment, and ',
        img: 'weba1',
        url:'https://www.woxdoc.link/'
    },
    {
        title: 'Ashtead',
        type: 'web-application',
        text: 'Discover the modern ERP system that helping 30 million users to shape the perfect space also transform your business processes. Our ERP software helps companies to adopt new business models also manage business change at speed. Here we unify your business processes and enable the flow of data between them. Moving your ERP systems to the Cloud expedites and improves accuracy and access to that data. ',
        img: 'weba2',
        url:'https://www.ashtead.link/'
    },
    {
        title: 'Xentice',
        type: 'web-application',
        text: 'Xentice works like just another classifieds portal – it has a parallel system for customers running side by side. People who wish to sell any goods can upload their advertisements just like one is expected to do in a classifieds portal. Xentice combines tech expertise and business intelligence to catalyze change and deliver results. People who wish to buy properties and business services may browse through the listing. Sellers need to upload pictures of ',
        img: 'weba3',
        url:'https://www.xentice.com/'
    },
    {
        title: 'Smart Clinic',
        type: 'web-application',
        text: 'Smart Clinic is a personal occupational health and wellbeing service, accessible directly from your phone. It is a leading HIPAA-compliant mHealth application that enhances patient engagement, compliance and satisfaction.SmartClinics offers Whether you practice individually or you re a clinic/hospital, SmartClinic provides solutions for every facet of healthcare. ',
        img: 'weba4',
        url:null,
        comingSoon:true,
    },
    {
        title: 'Indian Bank',
        type: 'iot-and-ai',
        text: 'Indian Bank is an Indian state-owned financial services company established in 1907 and headquartered in Chennai, India. Bank was incorporated on March 5, 1907, with an Authorized Capital of Rs.20 lakhs and commenced its business on August 15, 1907. In the year 1907, the Indian Bank Ltd. had the tree ‘Banyan’ as a part of its emblem denoting all-around progress, growth (far and wide), and ever-increasing prosperity. ',
        img: 'iot1',
        url:null
    },
    {
        title: 'South Indian Bank',
        type: 'iot-and-ai',
        text: 'One of the earliest banks in South India, South Indian Bank came into being during the Swadeshi movement. The establishment of the bank was the fulfillment of the dreams of a group of enterprising men who joined together at Thrissur, a major town (now known as the Cultural Capital of Kerala), in the erstwhile State of Cochin to provide for the people a safe, efficient and service oriented repository of savings of the community on one hand and ',
        img: 'iot2',
        url:null
    },
    {
        title: 'DB Mall',
        type: 'iot-and-ai',
        text: 'DB City Mall is the 8th largest shopping mall in India and largest shopping mall in central India as well as the Capital city of the state Bhopal. It is home to many entries like McDonald’s, Burger King, KFC, Domino’s, Subway, etc. It also includes a 5-Star Hotel Courtyard by Marriot. It also has stores of tech companies like Apple, Croma, Reliance Digital, and Fashion brands like Max Fashion, Pantaloons, Reliance Trends, Shopper’s Stop. A gaming ',
        img: 'iot3',
        url:null
    },
    {
        title: 'Hyundai',
        type: 'iot-and-ai',
        text: 'Hyundai Motor India Limited (HMIL) is a wholly owned subsidiary of Hyundai Motor Company (HMC). HMIL is India’s first smart mobility solutions provider and the number one car exporter since inception in India. Hyundai India is a fully owned subsidiary of South Korean automobile manufacturer, Hyundai. Hyundai Motor s various vehicle lineups ,brand vision and global campaign like clean mobility, sustainability, art and sports partnership ',
        img: 'iot4',
        url:null
    },

]


const FilterAll = ({type}) => {
    return (
        <FlexRev>
                {
                    OUR_WORKS.map((work )=>{
                        if(type === work.type){
                            return <SingleWork key={Math.random()}  {...work }   />
                        }else if(type === 'all'){
                            return <SingleWork key={Math.random()}  {...work }  />
                        }
                    })
                }
        </FlexRev>
    )
}

export default FilterAll

const FlexRev = styled.div`
    > div:nth-child(2n+1){
        flex-direction:row-reverse;
        @media (max-width: 768px) {
            flex-direction:column;
        }
    }
`

