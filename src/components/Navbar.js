'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex justify-between items-center py-[52px] px-[100px]'>
      <Link href={'/'}>
        <span className='text-[#FFFFFF] leading-[43.57px] text-[36px] font-[400]'>
          Web3 <span className='text-[#F2A93B]'>Together</span>
        </span>
      </Link>
      <ul className='flex items-center leading-[24.2px] text-[20px] font-[400] gap-[40px] text-white/50'>
        <li>
          <Link href={'/membership'}
            className={`${pathname === '/membership' && 'text-[#F2A93B] font-[700]'} `}
          >
            Membership
          </Link>
        </li>
        <li>
          <Link href={'rewards'}
            className={`${pathname === '/rewards' && 'text-[#F2A93B] font-[700]'}`}
          >
            Rewards
          </Link>
        </li>
        <li>
          <Link href={'community'}
            className={`${pathname === '/community' && 'text-[#F2A93B] font-[700]'}`}
          >
            Community
          </Link>
        </li>
        <li>
          <Link href={'faqs'}
            className={`${pathname === '/faqs' && 'text-[#F2A93B] font-[700]'}`}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link href={'mint'}
            className='rounded-[7px] bg-[#F2A93B] w-[160px] h-[62px] flex justify-center items-center focus:opacity-0 duration-300 ease-out font-[700] text-white'
          >
            Mint is live
          </Link>
        </li>
      </ul>
    </nav>
  )
}
