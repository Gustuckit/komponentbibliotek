import React from 'react'

import { Button, Card, Modal, Graph, Image, Navbar, Text, Timer } from '../components'

import { gif } from '../assets'

const Home = () => {

    const patrickBio = "Patrick Star is a fictional character in the American animated television series SpongeBob SquarePants. He is voiced by actor Bill Fagerbakke and was created and designed by marine biologist and animator Stephen Hillenburg. He first appeared in the series' pilot episode 'Help Wanted' on May 1, 1999. In addition to his supporting role on SpongeBob SquarePants, Patrick also serves as the main protagonist of The Patrick Star Show, which premiered in 2021."

    const graphData = [
        {
            name: "1",
            time: "10"
        },
        {
            name: "2",
            time: "20"
        },
        {
            name: "3",
            time: "40"
        }
    ]
    const graphData2 = [
        {
            name: "1",
            time: "-40"
        },
        {
            name: "2",
            time: "20"
        },
        {
            name: "3",
            time: "10"
        }
    ]

    return (
        <div className='flex flex-col justify-center items-center px-16'>
            <h1 className='text-[48px] font-bold'>Home</h1>
            <section className='mt-[40px]'>
                <Card image={gif} headline={"Patrick."} brief={"Lives in the sea!"} />
            </section>
            <section className='mt-[40px] flex flex-row gap-6'>
                <Button text={"Click Me!"} />
                <Button text={"Don't Click Me!"} />
            </section>
            <section className='mt-[40px] w-[400px]'>
                <Text input={patrickBio} />
            </section>
            <section className='flex flex-row gap-6 mt-[40px]'>
                <Graph content={graphData} width={400} height={240} />
                <Graph content={graphData2} width={400} height={240} />
            </section>
            <section className='mt-[40px] mb-[100px]'>
                <Modal image={gif} header={"Awesome Modal"} contents={patrickBio} />
            </section>
            <section>
                <Timer value={64.31} />
                <Timer value={3.71} />
                <Timer value={3168.25} />
            </section>
        </div>
    )
}

export default Home