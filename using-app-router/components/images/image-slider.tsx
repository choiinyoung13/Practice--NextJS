'use client'

import burger from '@/assets/burger.jpg'
import curry from '@/assets/curry.jpg'
import dumplings from '@/assets/dumplings.jpg'
import macncheese from '@/assets/macncheese.jpg'
import pizza from '@/assets/pizza.jpg'
import schnitzel from '@/assets/schnitzel.jpg'
import tomatoSalad from '@/assets/tomato-salad.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  { image: burger, alt: 'A delicious, juicy burger' },
  { image: curry, alt: 'A delicious, spicy curry' },
  { image: dumplings, alt: 'Steamed dumplings' },
  { image: macncheese, alt: 'Mac and cheese' },
  { image: pizza, alt: 'A delicious pizza' },
  { image: schnitzel, alt: 'A delicious schnitzel' },
  { image: tomatoSalad, alt: 'A delicious tomato salad' },
]

export default function ImageSlider() {
  const [currentSelectedImg, setCurrentSelectedImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSelectedImg(prevIndex =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      )
    }, 4000)

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
      {images.map((image, index) => (
        <Image
          key={image.alt + index}
          className={`${
            index === currentSelectedImg
              ? 'opacity-100 z-1 scale-100 translate-x-0 rotate-0'
              : 'opacity-0 scale-110 -translate-x-4 -rotate-5'
          } w-full h-full object-cover absolute top-0 left-0  transform transition-all duration-500 ease-in-out `}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  )
}
