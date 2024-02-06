'use client'
import React, { useState } from 'react'

export const Accordion = ({ data }) => {
    const [isActive, setActive] = useState(null)
    return (
        <>
            {data.map((data, index) => (
                <button key={index}
                    className='w-full text-start py-7 duration-300 px-5 md:px-10 lg:px-16 xl:px-24 bg-[#D9D9D91A] rounded-2xl'
                    onClick={() => setActive(isActive === index ? null : index)} >
                    <h1 className='duration-300 font-bold text-lg lg:text-xl xl:text-2xl text-white/50'>{data.question}</h1>
                    <p className={`${isActive === index && 'max-h-96 pt-5 opacity-100'}opacity-0 ease-in-out duration-300 max-h-0 origin-top overflow-hidden`}>
                        {data.answer}
                    </p>
                </button >
            ))
            }
        </>
    )
}
