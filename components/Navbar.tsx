'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { navbarItems } from '@/lib/constants'
import { Menu, XIcon } from 'lucide-react'
import { themeStyles, typography } from '@/lib/styles'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={themeStyles.section}>
        <div className='container mx-auto flex items-center justify-between py-5'>
            <div>
                <Link href='/'><h3 className={typography.header}>BSIIM</h3></Link>
            </div>
            <ul className='hidden md:flex items-center gap-5 text-base font-medium font-outfit'>
                {
                    navbarItems.map((item, index) => (
                        <li key={index} className={`${typography.paragraph} hover:underline hover:underline-offset-4 cursor-pointer`}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden md:flex'>
                <Link href='/register' className={`${themeStyles.buttonBackground} ${themeStyles.buttonText} ${typography.paragraph}`}>
                    Become A Member
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden flex items-center'>
                {
                    isMenuOpen ? (
                        <XIcon onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
                    ) : (
                        <Menu onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
                    )

                }
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} ${themeStyles.card} absolute top-16 right-0 p-4 min-w-[100px] rounded-xl z-10`}>
            <ul className='flex flex-col items-center gap-5 text-base font-medium font-outfit'>
                {
                    navbarItems.map((item, index) => (
                        <li key={index} className={`${typography.paragraph} hover:underline hover:underline-offset-4 cursor-pointer`}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link href='/register' className={`${themeStyles.buttonBackground} ${themeStyles.buttonText} ${typography.paragraph} rounded-lg`}>
                        Become A Member
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export { Navbar }