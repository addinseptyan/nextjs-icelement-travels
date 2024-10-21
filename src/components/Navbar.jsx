'use client'

import React from 'react'
import navbarData from '@/data/navbar'
import appLogo from '../app/icon.svg'
import Button from './Button'
import Image from 'next/image'
import { IconBellFill, IconClose, IconHamburger } from '@/data/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Modal from './Modal'
import useModal from '@/hooks/useModal'

function Navbar() {
  const [isOpenNav, setIsOpenNav] = React.useState(false)
  const navRef = React.useRef(null)
  const { isOpen, openModal, closeModal } = useModal()
  const pathname = usePathname()
  const activeStyle = 'text-brand'

  const toggleNav = () => setIsOpenNav((prev) => !prev)
  const closeNav = () => setIsOpenNav(false)
  const handleClickOutside = (e) => {
    if (
      isOpenNav &&
      !navRef.current.contains(e.target) &&
      !e.target.closest('#hamburger')
    ) {
      closeNav()
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenNav])

  return (
    <header className='shadow-sm'>
      <div className='relative h-[4.5rem] w-[90%] max-w-screen-xl mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <div className='flex items-center gap-2'>
            <Image
              src={appLogo}
              alt='Icelement Travels Logo'
              width={24}
              height={24}
            />
            <span className='text-lg md:text-2xl font-medium'>
              Icelement Travels
            </span>
          </div>
        </Link>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-4'>
            {navbarData.map((item) => (
              <li
                key={item.title}
                className={`hover:text-brand ${
                  item.link === pathname && activeStyle
                }`}
              >
                <Link href={item.link}>
                  {item.title === 'Notification' ? (
                    <IconBellFill />
                  ) : (
                    item.title
                  )}
                </Link>
              </li>
            ))}
            <li key={'button'}>
              <Button onClick={openModal}>Sign in</Button>
            </li>
          </ul>
        </nav>

        {/* Mobile nav */}
        <button id='hamburger' className='md:hidden' onClick={toggleNav}>
          {isOpenNav ? (
            <IconClose className='size-6' />
          ) : (
            <IconHamburger className='size-6' />
          )}
        </button>
        {isOpenNav && (
          <nav
            ref={navRef}
            className='absolute z-50 top-20 right-0 w-60 rounded-2xl bg-neutral-white border border-neutral-black/10 shadow-lg'
          >
            <ul className='p-4 flex flex-col divide-y divide-neutral-black/20'>
              {navbarData.map((item, index) => (
                <li
                  key={index}
                  className={`w-full text-right hover:text-brand py-2 flex justify-end ${
                    item.link === pathname && activeStyle
                  }`}
                >
                  <Link href={item.link}>
                    {item.title === 'Notification' ? (
                      <IconBellFill />
                    ) : (
                      item.title
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </header>
  )
}

export default Navbar
