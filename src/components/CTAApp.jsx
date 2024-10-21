import Image from 'next/image'
import React from 'react'
import picCTAApp from '@/assets/images/cta-app.jpg'
import picQR from '@/assets/images/qr.png'

function CTAApp() {
  return (
    <div className='layout md:h-[266px] rounded-2xl border border-neutral-black/20 overflow-hidden flex flex-col md:flex-row'>
      <div className='relative w-full md:w-[400px] md:h-full'>
        <Image
          src={picCTAApp}
          alt='Cute Snowman Image'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover object-center'
        />
      </div>
      <div className='pt-6 md:pt-0 md:pl-10 flex flex-col md:flex-row items-center gap-4'>
        <article className='w-[80%] md:w-[75%] flex flex-col gap-2'>
          <h3 className='text-2xl md:text-4xl font-medium tracking-tight'>
            Explore more with the Icelement app
          </h3>
          <p className='text-sm'>
            Save on select hotels and earn double points by booking through our
            app. Enjoy exclusive deals that help you travel more while managing
            everything on the go.
          </p>
          <p className='text-sm font-bold'>
            Scan the QR code with your device camera and download our app
          </p>
        </article>
        <div className='relative size-[150px] '>
          <Image
            src={picQR}
            alt='QR image'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover object-center'
          />
        </div>
      </div>
    </div>
  )
}

export default CTAApp
