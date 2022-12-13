import React from 'react'
import styled from 'styled-components'
import SingleFilter from './SingleFilter'

export const VACANCIES = [
    {
        name:'Laravel Developer',
        type:'Full Time',
        desc:'Building and maintaining modern web applications using standard web development tools. writing clean and secure modular codes that have undergone strict testing and evaluatio..',
        url:'laravel-developer'
    },
    {
        name:'React Js Developer ',
        type:'Full Time',
        desc:'Design and build web applications . Ensure the performance, quality, and responsiveness of the application through rigorous testing. Collaborate with the team to define, design, and ...',
        url:'react-js-developer'
    },
    {
        name:'React Native Developer ',
        type:'Full Time',
        desc:'Design and build applications for the Apple iOS and Android platforms. Ensure the performance, quality, and responsiveness of the application through rigorous testing. Collaborate with the team to define, design, and ship new features. Identify and correct bottlenecks and fix bugs to maintain code quality...',
        url:'react-native-developer'
    },
    {
        name:'Magento Developer ',
        type:'Full Time',
        desc:'Magento developers are in charge of developing, maintaining, and improving their clients’ eCommerce websites. Their responsibility is huge, as most of the time, Magento websites generate a..',
        url:'magento-developer'
    },
    {
        name:'Project Coordinator ',
        type:'Full Time',
        desc:'Monitoring project progress and creating project status reports for project managers and stakeholders. Scheduling stakeholder meetings and facilitating communication between th..',
        url:'project-coordinator'
    },
    {
        name:'Graphic Designer ',
        type:'Full Time',
        desc:' Includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. You ll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more...',
        url:'graphic-designer'
    },
    {
        name:'Full Stack Developer ',
        type:'Full Time',
        desc:'A full stack developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may ..',
        url:'full-stack-developer'
    },
    {
        name:'WordPress Developer ',
        type:'Full Time',
        desc:'WordPress Developers are responsible for both back-end and front-end development, including creating WordPress themes and plugins. They have different programming skills such as namely PHP, HTML5, CSS3, and JavaScript...',
        url:'wordpress-developer'
    },
    {
        name:'Business Executive ',
        type:'Full Time',
        desc:'The role of a Business Development Executive is to assist the organization s sales and growth efforts by contributing to new customer acquisition. The primary role and responsibilities of a ..',
        url:'business-executive'
    }
]

const Filter = () => {
  return (
    <FilterGrid>
        {VACANCIES.map((vac) =>{
            return <SingleFilter key={Math.random()} {...vac} />
        })}
    </FilterGrid>
  )
}

export default Filter
const FilterGrid = styled.div`
    display:grid;
    padding-block:3rem;
    grid-template-columns:repeat(3,1fr);
    @media (max-width:1100px) {
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width:820px) {
        grid-template-columns:repeat(1,1fr);
    }
`