import React from 'react'
import Link from 'next/link'
import { navbarItems } from '@/lib/constants'
import amethyst from '@/assets/images/amethyst.png'
import Image from 'next/image'
import { typography, themeStyles } from '@/lib/styles'

const Footer = () => {
    return (
        <div className={themeStyles.section}>
          <footer className='footer p-10 lg:p-20 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <aside>
                <h3 className={typography.header}>BSIIM</h3>
            </aside>
            <nav className='flex flex-col gap-4'>
              <header className={typography.subtitle}>Company</header>
              {navbarItems.map((item) => (
                <Link
                  href={item.path}
                  className={`${typography.paragraph}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav className='flex flex-col gap-4'>
              <header className={typography.subtitle}>Contact</header>
              <a href='tel:2348175637632' className={typography.paragraph}>Tel: +2348175637632</a>
              <a href='tel:2347030632712' className={typography.paragraph}>Tel: +2347030632712</a>
              <a href='mailto:info@bsiimplatform.com' className={typography.paragraph}>Email: info@bsiimplatform.com</a>
            </nav>
          </footer>
          <div className='flex flex-col items-center'>
            <p className={typography.paragraph}>Powered by Amethyst International</p>
            <Image src={amethyst} className='w-24' alt='Amethyst Internatinal' />
          </div>
        </div>
      );
}

export { Footer }