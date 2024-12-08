import React from 'react'
import Hero from './Component/Hero'
import Cont from './Component/Range'
import Product from './Component/Product'
import Shop from './Component/Shop'
import Setup from './Component/Setup'


const page = () => {
  return (
    <div>
      <Hero/>
      <Cont/>
      <Product/>
      <Shop/>
      <Setup/>
    </div>
  )
}

export default page