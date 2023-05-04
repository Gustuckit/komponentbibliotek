import React from 'react'

import { Text } from '../components'

const Card = (props) => {

    return (
        <div className='flex justify-center flex-col items-center'>
            <section className='px-2 py-6 bg-[#b6b6b679] flex flex-col items-center rounded-2xl'>
                <h1 className='mb-6'>Card</h1>
                <img src={props.image} className='w-[50%]' />
                <div className='text-center mt-[10px] font-bold'>
                    <div><Text input={props.headline} /></div>
                    <div><Text input={props.brief} /></div>
                </div>
            </section>
        </div>
    )
}

export default Card