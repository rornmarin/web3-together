import React from 'react'

export const Button = ({ label, onClick, className }) => {
    return (
            <button onClick={onClick}
                className={`lg:text-xl whitespace-nowrap font-bold bg-[#F2A93B] rounded-lg py-3 px-5 ${className}`}
            >
                {label}
            </button>
    )
}