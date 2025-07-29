import React from 'react'
import { services } from '@/lib/constants'
import { themeStyles, typography } from '@/lib/styles'
import Link from 'next/link'

const TopServices = () => {
  return (
    <section className={themeStyles.section}>
        <div className='p-10 lg:p-20'>
            <h2 className={`${typography.subtitle} text-center md:text-left`}>Our Top Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {
                    services.splice(0,3).map((service, index) => (
                        <Link href='/services' key={index} className={`${themeStyles.card} rounded-md p-8`}>
                            <h3 className={`${typography.subtitle} mb-4`}>{service.title}</h3>
                            <p className={`${typography.paragraph}`}>{service.content}</p>
                        </Link>
                    ))
                }
            </div>
            <Link href='/services' className={`${themeStyles.buttonBackground} ${themeStyles.buttonText} ${themeStyles.buttonHover} ${typography.paragraph}`}>
                View More
            </Link>
        </div>
    </section>
  )
}

export { TopServices }