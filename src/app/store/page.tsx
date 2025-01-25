import CategorySideBar from '@/components/Store/CategorySideBar'
import HeroBanner from '@/components/Store/HeroBanner';
import ProductCard from '@/components/Store/ProductCard';
import products from '@/utils/products';
import React from 'react'

const page = () => {

  const slides = [
    {
      image: "/test/hero-image.jpg",
      primaryText: "Unleash Your Potential.",
      secondaryText: "Elevate Every Step with Nike.",
    },
    {
      image: "/test/hero-image.jpg",
      primaryText: "Find Your Inner Champion.",
      secondaryText: "Experience Excellence with Nike.",
    },
    {
      image: "/test/hero-image.jpg",
      primaryText: "Step Into the Future.",
      secondaryText: "Innovative Style by Nike.",
    },
  ];


  return (
    <div className=''>
      <HeroBanner slides={slides} />
      <div className=''>
        <div className='mt-5 flex flex-wrap justify-between space-x-1 items-center'>
          {products.map((product: any, index: any) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
