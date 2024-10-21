import React from 'react'
import siteLink from '@/data/footer'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-brand/10 mt-20 rounded-t-2xl pt-14 pb-4'>
      <div className='layout flex flex-col gap-4'>
        <h2 className='text-xl text-brand font-semibold'>Icelement Travels</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {siteLink.map((data) => (
            <div key={data.title} className='flex flex-col gap-2'>
              <h4 className='text-sm font-medium'>{data.title}</h4>
              {data.links.map((l, index) => (
                <Link
                  href={l.link}
                  key={index}
                  className='text-sm text-secondary'
                >
                  {l.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className='border-b border-neutral-black/20'></div>
        <p className='text-sm text-neutral-black/70 text-center'>
          Copyright ©️ 2024 Icelement Travels. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
