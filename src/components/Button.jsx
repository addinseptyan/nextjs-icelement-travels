import React from 'react'

const variantClass = {
  text: 'hover:text-brand',
  primary:
    'px-4 py-2 bg-brand rounded-full text-neutral-white hover:bg-opacity-80',
  secondary:
    'px-4 py-2 border border-brand rounded-full text-brand bg-neutral-white hover:bg-brand hover:text-neutral-white',
}

function Button({ children, variant = 'primary', className, onClick }) {
  return (
    <button
      className={`${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
