import Image from 'next/image'
import React from 'react'

const CardTypical = (props) => (
  <div className='relative flex-shrink-0 w-full h-[300px] bg-slate-500 rounded-2xl overflow-hidden'>
    <Image
      src={props.image}
      alt=''
      fill
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='object-cover'
    />
    <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-neutral-black/80 to-transparent' />
    <span className='absolute bottom-2 left-4 font-semibold text-neutral-white'>
      {props.title}
    </span>
  </div>
)

const CardTrending = (props) => (
  <div className='relative w-full h-[218px] rounded-2xl border border-neutral-black/20 overflow-hidden'>
    <div className='relative w-full h-[155px]'>
      <Image
        src={props.image}
        alt=''
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover object-center'
      />
    </div>
    <p className='absolute bottom-7 left-4 text-sm font-medium text-black'>
      {props.city}
    </p>
    <p className='absolute bottom-2 left-4 text-sm font-light text-black'>
      {props.country}
    </p>
  </div>
)

const CardDeals = (props) => (
  <div className='relative w-full rounded-2xl pb-4 overflow-hidden'>
    <div className='relative w-full h-[150px] rounded-b-2xl overflow-hidden'>
      <Image
        src={props.image}
        alt=''
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover object-center'
      />
    </div>
    <article className='mt-4'>
      <p className='text-sm text-neutral-white'>{props.city}</p>
      <p className='text-xl font-semibold text-neutral-white'>{props.place}</p>
      <div className='mt-2 text-neutral-white'>
        <div className='flex gap-4 items-center'>
          <span className='text-2xl font-semibold text-accent'>
            ${props.finalPrice}
          </span>
          <span className='line-through opacity-70 font-light'>
            ${props.price}
          </span>
        </div>
        <div className='text-sm font-light opacity-70'>
          <p>per night</p>
          <p>includes taxes & fees</p>
        </div>
      </div>
    </article>
  </div>
)

function Card(props) {
  const { variant, ...restProps } = props

  if (variant === 'trending') return <CardTrending {...restProps} />
  if (variant === 'deals') return <CardDeals {...restProps} />

  return <CardTypical {...restProps} />
}

export default Card
