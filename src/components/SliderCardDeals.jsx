'use client'

import React from 'react'
import picBG from '@/assets/images/bg-deals.jpg'
import Image from 'next/image'
import Button from './Button'
import SliderCard from './SliderCard'
import Card from './Card'
import dataDeals from '@/data/cardDeals'
import { getDealsDate } from '@/utils/getDealsDate'
import useModal from '@/hooks/useModal'
import Modal from './Modal'

function SliderCardDeals() {
  const { saturday, sunday, month } = getDealsDate()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className='relative layout h-[650px] bg-slate-500 rounded-2xl overflow-hidden'>
      <Image
        src={picBG}
        alt='A family on the snow'
        fill
        sizes='(max-width: 1500px) 100vw, (max-width: 800px) 50vw, 33vw'
        className='object-cover object-center'
      />
      <div className='absolute size-full bg-gradient-to-t from-thirtiary/50 via-thirtiary/80 to-thirtiary/30' />
      <article className='absolute top-20 md:top-28 w-full px-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-2'>
        <div>
          <h3 className='text-xl md:text-2xl font-semibold text-neutral-white text-center md:text-left'>
            Last-minute weekend deals
          </h3>
          <div className='text-neutral-white text-xs md:text-sm flex flex-col md:flex-row items-center md:gap-4'>
            <span>Showing deals for:</span>
            <span className='font-semibold text-sm md:text-base'>
              {saturday} - {sunday} {month}
            </span>
          </div>
        </div>
        <Button variant='secondary' onClick={openModal} className={'w-fit'}>
          See all deals
        </Button>
      </article>
      <SliderCard
        amountSlides={4}
        className='absolute bottom-20 md:bottom-28 left-0 right-0'
      >
        {dataDeals.map((data, index) => (
          <Card key={index} variant={'deals'} {...data} />
        ))}
      </SliderCard>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default SliderCardDeals
