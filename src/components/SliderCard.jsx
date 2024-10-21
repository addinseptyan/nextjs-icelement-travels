'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, background: 'cornflowerblue', borderRadius: '100%' }}
      onClick={onClick}
    />
  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, background: 'cornflowerblue', borderRadius: '100%' }}
      onClick={onClick}
    />
  )
}

function SliderCard(props) {
  const { children, amountSlides, title, className } = props
  const [isHover, setIsHover] = React.useState(false)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: amountSlides,
    swipeToSlide: true,
    arrows: isHover,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: 'marginLeft: 10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      className={`${className}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`layout space-y-3 md:space-y-6`}>
        <h2 className='text-xl md:text-3xl font-medium'>{title}</h2>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  )
}

export default SliderCard
