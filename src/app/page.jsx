'use client'

import React from 'react'
import Hero from '@/components/Hero'
import SliderCardTypical from '@/components/SliderCardTypical'
import CTA from '@/components/CTA'
import SliderCardTrending from '@/components/SliderCardTrending'
import CTAApp from '@/components/CTAApp'
import SliderCardDeals from '@/components/SliderCardDeals'

export default function Home() {
  return (
    <div className='space-y-8 md:space-y-16'>
      <Hero />
      <SliderCardTypical />
      <CTA />
      <SliderCardTrending />
      <SliderCardDeals />
      <CTAApp />
    </div>
  )
}
