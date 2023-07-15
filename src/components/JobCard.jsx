import React, { useState } from 'react'

const JobCard = ({ position, role, location, salary }) => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <div
                className={`transition-all ease-in-out delay-100 rounded-t-2xl px-4 pt-10 flex-col w-96 space-y-3 h-fit scroll-smooth text-lg 
                    ${show ? 'bg-[#ffee99] cursor-pointer' : 'bg-[#FEFBEC] rounded-b-2xl pb-10'}`}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
            >
                <h1 className="font-bold ml-4">{role}</h1>
                <ul className="list-disc ml-12 text-base">
                    <li>{position}</li>
                    <li>{location}</li>
                    <li>{salary}</li>
                </ul>
            </div>
            <div
                className={`transition-all ease-in-out delay-100  ${show ? 'visible bg-[#ffee99] rounded-b-2xl' : 'invisible bg-white'}`}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
            >
                <button
                    className="px-4 py-2 text-sm ml-6 my-8 rounded-full bg-black text-white"
                >
                    Show Details
                </button>
            </div>
        </div>
    )
}

export default JobCard; 