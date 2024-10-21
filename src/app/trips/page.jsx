'use client'

import React from 'react'
import { IconLock } from '@/data/icons'
import Button from '@/components/Button'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal'

function Page() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className='layout py-10 flex flex-col gap-16'>
      <h1 className='text-xl md:text-3xl font-semibold'>Trips</h1>
      <div className='flex justify-center'>
        <div className='p-6 rounded-full bg-gradient-to-t from-brand/0 to-brand/60'>
          <IconLock className='size-20' />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <Button onClick={openModal}>Sign in</Button>
          <div className='flex flex-col items-center'>
            <p className='text-sm md:text-base font-semibold'>
              Don't have an account?
            </p>
            <Button
              variant='text'
              onClick={openModal}
              className={'text-sm md:text-base'}
            >
              Create an account
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default Page
