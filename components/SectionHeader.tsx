import React from 'react'
import { typography } from '@/lib/styles'

const SectionHeader = ({title}: {title:string}) => {
  return (
    <div className='text-white bg-gray-900 flex justify-center items-center h-96'>
        <h1 className={typography.header}>{title}</h1>
    </div>
  )
}

export { SectionHeader }