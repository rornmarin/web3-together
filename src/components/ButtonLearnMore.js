import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export const ButtonLearnMore = ({onClick, className}) => {
    return (
        <button onClick={onClick}
            className={`${className} text-[20px] font-normal leading-[24.2px] rounded-[7px] py-[10.5px] px-[18.5px] ring-[2px] ring-white/50 flex items-center relative overflow-clip pr-[63px]`}
        >
            Learn More
            <IoIosArrowForward className='absolute bg-white/20 right-0 h-full w-[49px] flex justify-center items-center'/>
        </button>
    )
}
