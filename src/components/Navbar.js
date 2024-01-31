'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const Navbar = () => {
  const pathname = usePathname()
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='flex justify-between items-center lg:py-[52px] py-[20px] px-[20px] lg:px-[100px]'>
      <Link href={'/'}>
        <span className='text-[#FFFFFF] leading-[43.57px] text-[36px] max-xl:text-[25.2px] font-[400]'>
          <Image priority width={100} src={require('../resources/logo/web3_together_logo_white_text.png')} alt='logo'/>
        </span>
      </Link>

      <ul className='flex items-center leading-[24.2px] text-[20px] max-xl:text-[14px] font-[400] gap-[40px] text-white/50 max-md:hidden'>
        <li>
          <Link href={'/membership'}
            className={`${pathname === '/membership' && 'text-[#F2A93B] font-[700]'}`}
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
            className='rounded-[7px] bg-[#F2A93B] px-[27.5px] py-[19px] flex justify-center items-center duration-300 ease-out font-[700] text-white'
          >
            Mint is live
          </Link>
        </li>
      </ul>

      <label className='hamburger-menu md:hidden'>
        <input type='checkbox' checked={toggleMenu} onChange={()=>setToggleMenu(!toggleMenu)}/>
      </label>
      <aside className='sidebar fixed top-0 right-0 duration-300 backdrop-blur bg-white/5 max-md:w-full max-md:h-screen pt-[100px] overflow-auto'>
        <ul className='flex flex-col items-center px-[10px] leading-[24.2px] text-[20px] max-xl:text-[14px] font-[400] gap-[40px] text-white/50 md:hidden sm:pb-[30px] sm:px-[30px]'>
          <li>
            <Link href={'/membership'}
              className={`${pathname === '/membership' && 'text-[#F2A93B] font-[700]'}`}
              onClick={()=>setToggleMenu(false)}
            >
              Membership
            </Link>
          </li>
          <li>
            <Link href={'rewards'}
              className={`${pathname === '/rewards' && 'text-[#F2A93B] font-[700]'}`}
              onClick={()=>setToggleMenu(false)}
            >
              Rewards
            </Link>
          </li>
          <li>
            <Link href={'community'}
              className={`${pathname === '/community' && 'text-[#F2A93B] font-[700]'}`}
              onClick={()=>setToggleMenu(false)}
            >
              Community
            </Link>
          </li>
          <li>
            <Link href={'faqs'}
              className={`${pathname === '/faqs' && 'text-[#F2A93B] font-[700]'}`}
              onClick={()=>setToggleMenu(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link href={'mint'}
              className='rounded-[7px] bg-[#F2A93B] px-[27.5px] py-[19px] flex justify-center items-center duration-300 ease-out font-[700] text-white'
              onClick={()=>setToggleMenu(false)}
            >
              Mint is live
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  )
}
