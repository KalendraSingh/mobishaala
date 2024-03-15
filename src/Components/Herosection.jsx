import React from 'react'
import Right from "./Right"

import Left from './Left'

export default function Herosection() {
  return (
    <div className='bg-container'>
      <div className='container'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}
