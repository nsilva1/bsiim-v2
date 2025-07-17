import React from 'react'
import Link from 'next/link'

const GetInTouch = () => {
  return (
    <div className='bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 w-full'>
        <div className='container mx-auto py-10'>
            <h1 className='text-center text-3xl font-bold text-white'>How can we help you?</h1>
            <p className='text-center text-white mt-5'>
                <Link className='underline underline-offset-4 text-white' href='/contact-us'>Get in touch <span>with us</span></Link>
            </p>
        </div>
    </div>
  )
}

export { GetInTouch }