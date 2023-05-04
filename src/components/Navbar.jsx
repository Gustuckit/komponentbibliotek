import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = (links) => {
    return (
        <nav>
            <section className='flex flex-row gap-16 justify-center'>
                <div className='flex flex-row gap-16 w-min-content py-6 px-6 rounded-b-2xl bg-[#acacacd0]'>
                    <Link to={links.link1}>Home</Link>
                    <Link to={links.link2}>Text</Link>
                    <Link to={links.link3}>Card</Link>
                    <Link to={links.link4}>Timer</Link>
                </div>
            </section>
        </nav>
    )
}

export default Navbar