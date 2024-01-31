'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from './Button'

export const Navbar = () => {
  const pathname = usePathname()
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='flex justify-between items-center py-[20px] px-[20px] lg:px-[100px]'>
      <Link href={'/'}>
        <span className='text-[#FFFFFF] leading-[43.57px] text-[36px] max-xl:text-[25.2px] font-[400]'>
          <Image priority width={100} src={require('../resources/logo/web3_together_logo_white_text.png')} alt='logo' />
        </span>
      </Link>

      <ul className='flex items-center leading-[24.2px] text-[20px] max-xl:text-[14px] gap-[40px] text-white/50 max-md:hidden font-[700]'>
        <li>
          <Link href={'/membership'}
            className={`${pathname === '/membership' && 'text-[#F2A93B]'} hover:text-[#F2A93B] duration-100`}
          >
            Membership
          </Link>
        </li>
        <li>
          <Link href={'rewards'}
            className={`${pathname === '/rewards' && 'text-[#F2A93B]'} hover:text-[#F2A93B] duration-100`}
          >
            Rewards
          </Link>
        </li>
        <li>
          <Link href={'community'}
            className={`${pathname === '/community' && 'text-[#F2A93B]'} hover:text-[#F2A93B] duration-100`}
          >
            Community
          </Link>
        </li>
        <li>
          <Link href={'faqs'}
            className={`${pathname === '/faqs' && 'text-[#F2A93B]'} hover:text-[#F2A93B] duration-100`}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link onClick={() => setToggleMenu(false)} href='mint'>
            <Button label='Mint is live' className='!px-[27.5px] !py-[19px] text-white hover:bg-[#F2A93B]/80 duration-100' />
          </Link>
        </li>
      </ul>

      <label className={`hamburger-menu md:hidden ${toggleMenu && 'fixed right-[20px]'}`}>
        <input type='checkbox' checked={toggleMenu} onChange={() => setToggleMenu(!toggleMenu)} />
      </label>
      <aside className='sidebar fixed top-0 right-0 duration-300 backdrop-blur bg-white/5 max-md:w-full max-md:h-screen pt-[100px] overflow-auto z-50'>
        <ul className='flex flex-col items-center px-[10px] leading-[24.2px] text-[20px] font-[700] gap-[40px] text-white/50 md:hidden sm:pb-[30px] sm:px-[30px]'>
          <li>
            <Link href={'/membership'}
              className={`${pathname === '/membership' && 'text-[#F2A93B]'}`}
              onClick={() => setToggleMenu(false)}
            >
              Membership
            </Link>
          </li>
          <li>
            <Link href={'rewards'}
              className={`${pathname === '/rewards' && 'text-[#F2A93B]'}`}
              onClick={() => setToggleMenu(false)}
            >
              Rewards
            </Link>
          </li>
          <li>
            <Link href={'community'}
              className={`${pathname === '/community' && 'text-[#F2A93B]'}`}
              onClick={() => setToggleMenu(false)}
            >
              Community
            </Link>
          </li>
          <li>
            <Link href={'faqs'}
              className={`${pathname === '/faqs' && 'text-[#F2A93B]'}`}
              onClick={() => setToggleMenu(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggleMenu(false)} href='mint'>
              <Button label='Mint is live' className='!px-[27.5px] !py-[19px] text-white' />
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  )
}
