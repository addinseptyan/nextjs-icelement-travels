import React from 'react'
import SliderCard from './SliderCard'
import cardTrendingData from '@/data/cardTrending'
import Card from '@/components/Card'

function SliderCardTrending() {
  return (
    <SliderCard amountSlides={4} title='Explore stays in trending destinations'>
      {cardTrendingData.map((data, index) => (
        <Card key={index} variant={'trending'} {...data} />
      ))}
    </SliderCard>
  )
}

export default SliderCardTrending
