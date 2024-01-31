import React from 'react'

export const Button = ({ label, onClick, className }) => {
    return (
            <button onClick={onClick}
                className={`text-[20px] font-bold leading-[24.2px] bg-[#F2A93B] rounded-[7px] py-[10.5px] px-[18.5px] ${className}`}
            >
                {label}
            </button>
    )
}
