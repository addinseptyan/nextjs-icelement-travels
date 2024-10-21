import Button from '@/components/Button'
import { IconMaintenance } from '@/data/icons'
import React from 'react'

function Page() {
  return (
    <div className='layout py-10 flex flex-col gap-16'>
      <h1 className='text-xl md:text-3xl font-semibold'>Help Center</h1>
      <div className='flex justify-center'>
        <div className='p-6 rounded-full bg-gradient-to-t from-brand/0 to-brand/60'>
          <IconMaintenance className='size-20' />
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-sm md:text-base font-medium'>
          We're currently performing maintenance. Please check back soon!
        </p>
      </div>
    </div>
  )
}

export default Page
