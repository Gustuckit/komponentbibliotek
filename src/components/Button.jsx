import React from 'react'

const Button = (props) => {
    return (
        <div onClick={() => props.func} className='w-[200px] h-[100px] bg-[grey] text-white cursor-pointer rounded-2xl flex items-center justify-center text-[22px] hover:bg-[#8080809d]'>
            <p>{props.text}</p>
        </div>
    )
}

export default Button