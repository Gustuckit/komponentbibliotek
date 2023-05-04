import React from 'react'

const Timer = ({ value }) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[24px] font-bold'>Saved Time:</h1>
            <section className='text-[22px] font-serif text-[#00ff00]'>
                <span>{((Math.floor((value / 3600) % 24))) ? (("0" + Math.floor((value / 3600) % 24)).slice(-2)) + ":" : ""}</span>
                <span>{((Math.floor((value / 60) % 60))) ? ((Math.floor((value / 60) % 60))) + ":" : ""}</span>
                <span className={`${(value) > 10 ? "hidden" : "box"}`}>{((Math.floor((value) % 60))) ? ((Math.floor((value) % 60))) + "." : ""}</span>
                <span className={`${(value) > 10 ? "box" : "hidden"}`}>{((Math.floor((value) % 60))) ? (("0" + Math.floor((value) % 60)).slice(-2)) + "." : ""}</span>
                <span>{value < 1 ? (((value) % 100)) : (Math.floor((value * 100) % 100)).toString()}</span>
            </section>
        </div>
    )
}

export default Timer