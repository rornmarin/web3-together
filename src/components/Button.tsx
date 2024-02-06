import React from 'react'

export const Button = ({ label, onClick, className }) => {
    return (
            <button onClick={onClick}
                className={`lg:text-xl whitespace-nowrap font-bold bg-custom-yellow rounded-lg py-3 px-5 ${className}`}
            >
                {label}
            </button>
    )
}