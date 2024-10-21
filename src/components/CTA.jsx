'use client'

import React from 'react'
import Button from './Button'
import { IconBookmark } from '@/data/icons'
import useModal from '@/hooks/useModal'
import Modal from './Modal'

function CTA() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className='layout px-4 py-3 rounded-2xl bg-thirtiary text-neutral-white flex flex-col lg:flex-row justify-between items-center gap-4'>
      <div className='flex flex-col lg:flex-row items-center gap-4'>
        <div className='size-12 rounded-full bg-accent flex items-center justify-center'>
          <IconBookmark className='size-6 text-neutral-black' />
        </div>
        <span className='font-medium lg:font-semibold text-center lg:text-left max-w-[70%] lg:max-w-none'>
          Members enjoy discounts of 10% or more on over 100,000 hotels globally
          when logged in
        </span>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
      <Button onClick={openModal}>Sign in now</Button>
    </div>
  )
}

export default CTA
