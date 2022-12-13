import React from 'react'
import { useRef } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { VACANCIES } from './Filter';



const EXPERIENCE = [
    {
        val: 'Experience'
    },
    {
        val: '0 - 1'
    },
    {
        val: '1 - 2'
    },
    {
        val: '2 - 3'
    },
    {
        val: '3 - 4'
    },
    {
        val: '4 - 6'
    },
    {
        val: '6 - 8'
    },
    {
        val: '8+'
    }
]


const ApplyForm = () => {
    const { position } = useParams();
    const fileUpload = useRef(null);
    return (
        <div>
            {
                VACANCIES.map((vac) => {
                    if (vac.url === position) {
                        return (
                            <div key={Math.random()}>
                                <MainTitle>Apply Now for {vac.name.toUpperCase()}</MainTitle>
                                <Texts />
                                <Form >

                                    <FormRow>
                                        <Input placeholder='First Name *' />
                                        <Input placeholder='Last Name *' />
                                    </FormRow>
                                    <FormRow>
                                        <Input placeholder={vac.name} />
                                        <Input placeholder='Email *' />
                                    </FormRow>
                                    <FormRow>
                                        <Input placeholder='Contact Number *' />
                                        <Select>
                                            {EXPERIENCE.map((exp) => {
                                                return <option key={exp.val} value={exp.val === 'Experience' ? '' : exp.val}>{exp.val}</option>
                                            })}
                                        </Select>
                                    </FormRow>
                                    <FormRow>

                                        <Input ref={fileUpload} type='file' style={{ display: 'none' }} placeholder='Contact Number *' />
                                        <Span onClick={() => {
                                            fileUpload.current.click();
                                        }}>Upload your resume</Span>
                                    </FormRow>
                                    <Upload>Apply Now</Upload>

                                </Form>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ApplyForm

export const Text = styled.p`
    margin: auto;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    max-width: 840px;
    text-align: center;
    font-size: 0.875rem;
    color: #464545;
    width: 80%;

    margin-bottom: 1rem;
    letter-spacing: 0.06rem;
`
export const Texts = () => {
    return <Text>Our atmosphere is relaxed, fun, hard-working, and we fall anywhere between headphones and surround sound! We only bring on people to the team that has a passion for coding and designing; thus surrounding ourselves with happy people.</Text>
}
export const Main = () =>{
    return <MainTitle>Become a part of our big family to inspire and get inspired by professional experts.</MainTitle>
}



export const MainTitle = styled.h1`
    text-align:center;
`

const Form = styled.form`
    max-width:900px;
    margin:auto;
    padding-block:3rem;

`
const FormRow = styled.div`
    display:flex;
    gap:1rem;
    @media (max-width: 680px) {
        flex-direction: column;
        gap:0rem;
    }
`
const Input = styled.input`
    width:100%;
    padding: 12px 20px;
    margin: 0.5rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #ffffff;
    outline: none;
    margin-block: 0.8rem;
    &::placeholder{
        font-family:'Poppins';
    }
    @media (max-width: 680px) {
        width: auto;
    }
`
const Span = styled.span`
    width:47.5%;
    padding: 12px 20px;
    margin: 0.5rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #ffffff;
    outline: none;
    margin-block: 0.8rem;
    opacity:.7;
    font-size:14px;
    cursor: pointer;
    @media (max-width: 840px) {
        width: 46%;
    }
    @media (max-width: 680px) {
        width: auto;
    }
`
const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 0.5rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #ffffff;
    outline: none;
    margin-block: 0.8rem;
    @media (max-width: 680px) {
        width: auto;
    }
`

const Upload = styled.button`
    padding: 12px 20px;
    margin: auto;
    width:fit-content;
    margin-top: 5rem;
    box-sizing: border-box;
    background-color: #fff;
    color: #464545;
    border: 1px solid #464545;
    transition: color 0.3s;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    transition: transform 0.3s;
`