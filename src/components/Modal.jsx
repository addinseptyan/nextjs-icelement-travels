import React from 'react'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-neutral-white text-neutral-black rounded-lg shadow-lg p-6 max-w-xs sm:max-w-sm w-full'>
        <h2 className='text-xl font-bold'>Feature Under Maintenance</h2>
        <p className='mt-4'>
          We're currently working on improvements to enhance your experience.
          Please check back soon! Thank you for your patience.
        </p>
        <button
          onClick={onClose}
          className='mt-6 px-4 py-2 bg-thirtiary text-neutral-white rounded hover:bg-thirtiary/80'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
