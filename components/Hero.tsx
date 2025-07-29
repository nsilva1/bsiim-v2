import React from 'react'
import { themeStyles, typography } from '@/lib/styles'
import Link from 'next/link'
import consultant from '@/assets/images/consultant.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={themeStyles.section}>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center p-10 lg:p-20'>
            <div className='flex flex-col gap-8 items-center md:items-start'>
               <h1 className={`${typography.header} text-center md:text-left`}>Unlocking Potential.<br /> Delivering Growth.</h1>
               <p className={`${typography.subtitle} text-center md:text-left`}>Your business has untapped strengths. We help you find them and build<br className='hidden lg:block' /> the framework to scale, innovate, and dominate your market.</p>
               <Link href={'/register'} className={`${themeStyles.buttonBackground} ${themeStyles.buttonText} ${themeStyles.buttonHover} ${typography.paragraph}`}>
                    Get Started
               </Link> 
            </div>
            <div>
                <Image 
                    src={consultant}
                    alt='Business Consultant'
                    className='rounded-xl w-full'
                />
            </div>
        </div>
    </div>
  )
}

export { Hero }