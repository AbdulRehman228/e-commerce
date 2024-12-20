import React from 'react'
import Hero from './Component/Hero'
import Cont from './Component/Range'
import Product from './Component/Product'
import Shop from './Component/Shop'


const page = () => {
  return (
    <div>
      <Hero/>
      <Cont/>
      <Product/>
      <Shop/>
    </div>
  )
}

export default page