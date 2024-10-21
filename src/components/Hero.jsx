import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/images/hero-image.jpg'

function Hero() {
  return (
    <div className='relative h-[35rem]'>
      <Image
        src={heroImage}
        alt='Green Jacket Man in the Ice Mountain'
        fill
        priority
        className='object-cover'
      />
      <article className='relative h-full w-[90%] max-w-screen-xl mx-auto flex flex-col justify-center gap-2'>
        <h1 className='w-[60%] md:w-[55%] text-3xl md:text-5xl font-bold'>
          Discover the Enchantment of Icelement
        </h1>
        <p className='w-[60%] md:w-[40%] text-xl md:text-3xl font-light'>
          Unforgettable Adventures Await in the Arctic Wonderland
        </p>
      </article>
    </div>
  )
}

export default Hero
