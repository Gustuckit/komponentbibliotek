import React, { useState } from 'react'

const Modal = (props) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)} className={`${!toggle ? "box" : "hidden"} px-10 py-6 bg-[orange] rounded-2xl text-[22px] text-white`}>OPEN MODAL</button>
            <section className={`${!toggle ? "hidden" : "box"} flex flex-col items-center px-6 py-12 bg-[#6d6d6d67] rounded-2xl`}>
                <p className='absolute ml-[330px] mt-[-50px] text-[32px] text-[#ff0000] cursor-pointer' onClick={() => setToggle(!toggle)}>X</p>
                <h1>{props.header}</h1>
                <img src={props.image} />
                <div className='h-[2px]  w-full mt-4 bg-[#e4e4e4]' />
                <p className='w-[300px] mt-2'>{props.contents}</p>
            </section>
        </div >
    )
}

export default Modal