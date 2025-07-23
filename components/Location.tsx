import React from 'react'
import { themeStyles, typography } from '@/lib/styles'

const Location = () => {
  return (
    <section className={themeStyles.section}>
        <div className='p-10 lg:p-20'>
            <h2 className={`${typography.subtitle} text-center md:text-left`}>Our Location</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 shadow-2xl shadow-black/80 dark:shadow-gray-800/80'>
                <div className={`col-span-1 p-10 flex flex-col gap-8`}>
                    <h1 className={typography.header}>Abuja</h1>
                    <address>
                        Suite D88, 3rd Floor, IDE Plaza <br />
                        Plot 484, Obafemi Awolowo Way <br />
                        Utako <br />
                        Abuja, Nigeria <br />
                    </address>
                </div>
                <div className={`col-span-1 lg:col-span-2`}>
                    <div className='w-full'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.83821877519046!2d7.442613993417016!3d9.068708486597934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bbf9e3fe5d1%3A0x19d6587e30663626!2sIde%20Plaza%2C%20Utako!5e0!3m2!1sen!2sng!4v1753283617793!5m2!1sen!2sng" 
                            width="100%" 
                            height="450" 
                            style={{border: 0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export { Location }