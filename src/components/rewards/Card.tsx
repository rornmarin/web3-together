import Image from 'next/image'
import React from 'react'
import { Button } from '../Button'

export const Card = ({data}) => {
    return (
        <div className='rounded-lg p-5 bg-[#D9D9D91A] grid gap-5'>
            <div className='grid sm:grid-cols-[30%_1fr] gap-5'>
                <Image src={data.image} alt='image' className='rounded-lg'/>
                <div>
                    <h1 className='font-bold lg:text-xl pb-5'>
                        {data.title}
                    </h1>
                    <p className='font-normal text-base'>
                        {data.description}
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <span>{data.date}</span>
                <Button label='Join'/>
            </div>
        </div>
    )
}
