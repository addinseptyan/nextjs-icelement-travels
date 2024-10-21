import React from 'react'
import cardTypicalData from '@/data/cardTypical'
import SliderCard from './SliderCard'
import Card from './Card'

function SliderCardTypical() {
  return (
    <SliderCard
      amountSlides={5}
      title='Go beyond your typical stay in Icelement'
    >
      {cardTypicalData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </SliderCard>
  )
}

export default SliderCardTypical
