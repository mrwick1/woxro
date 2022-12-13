import React from 'react'
import styled from 'styled-components'

const CareerImages = () => {
    return (
        <div>
            <Flex>
                <Flex1>
                    <H2>We stand for Woxrians</H2>
                    <P>
                        At Woxro, we brings out meaningful work with our woxrians to make an impact.
                        Together we develop the products,for any people with the right
                        tools to help them grow.
                    </P>
                    <P>
                        The logic we as woxrians built into your project makes your firm standout.
                        We ensure the growth of our client at all phases of the project and
                        present you only the best.
                    </P>
                </Flex1>
                <Flex2>
                    <Flex3>
                        <FlexColumn>
                               <Image url='imgl1' />
                               <Image url='imgl2' />
                        </FlexColumn>
                        <FlexColumnC >
                               <Image url='imgc1' />
                               <Image url='imgc2' />
                        </FlexColumnC>
                        <FlexColumn>
                               <Image url='imgr1' />
                               <Image url='imgr2' />
                        </FlexColumn>
                    </Flex3>
                </Flex2>
            </Flex>
        </div>
    )
}

export default CareerImages

const Image = ({url}) =>{
    return <Img src={`/src/assets/${url}.JPG`} />
} 



const Img = styled.img`
width: 200px;
height: auto;
border-radius: 30px;
margin: 5px;
transition: all 0.3s;
@media (max-width:660px) {
    width: 150px;
    border-radius: 15px;
}
@media (max-width:520px) {
    width: 120px;
    border-radius: 12px;
}
@media (max-width:410px) {
    width: 100px;
    border-radius: 10px;
}
`


const Flex = styled.div`
    display:flex;
    padding-block: 5rem;
    padding-inline:3rem;
    gap:1rem;
    @media (max-width:1200px) {
        flex-direction:column;
        gap:2rem
    }
    @media (max-width:680px) {
        padding-inline:0rem;
    }
    `
const Flex1 = styled.div`
    flex:1;
    
    `
const Flex2 = styled.div`
    flex:2;
    `
const H2 = styled.h2`
    font-size: 2.5rem;
font-weight: bold;
`
const P = styled.p`
    font-size: .877rem;
    color: #161a1e;
    margin-bottom:.4rem;
    `
const Flex3 = styled.div`
    display:flex;
    @media (max-width:1200px){
        justify-content: center;
    }
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction:column;
`
const FlexColumnC = styled(FlexColumn)`
    padding-top:3rem;
`