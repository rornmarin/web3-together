import Image from 'next/image'
import React from 'react'
import ellipseV1 from '@/resources/shapes/ellipseV1.svg'
import ellipseV2 from '@/resources/shapes/ellipseV2.svg'
import ellipseV3 from '@/resources/shapes/ellipseV3.svg'
import ellipseV4 from '@/resources/shapes/ellipseV4.svg'
import triangle from '@/resources/shapes/triangle.svg'
import logo from '@/resources/logo/homeLogo.svg'

export const AnimatedBackgroundLogo = () => {
    return (
        <div className="relative w-[550px] h-[550px]">
            <Image
                className='w-full skew-y-[10deg] top-5 absolute blur-2xl rotate-180 -z-30 animate-pulse-slow'
                src={triangle} alt='triangle' />
            <Image
                className="absolute -z-20 blur-xl w-[500px] bottom-16 left-5 animate-pulse"
                src={ellipseV1} alt="shape1" />
            <Image
                className="absolute -z-20 blur-xl w-[500px] bottom-16 right-[-50px] animate-pulse"
                src={ellipseV2} alt="shape2" />
            <Image
                className="absolute -z-20 blur-xl w-[500px] top-[-150px] left-24 animate-pulse"
                src={ellipseV3} alt="shape3" />
            <Image
                className="absolute -z-20 blur-xl top-[-100px] left-10 animate-pulse"
                src={ellipseV4} alt="shape4" />
            <Image className='absolute top-5 left-14'
                src={logo} alt="homepagelogo" />
        </div>
    )
}
