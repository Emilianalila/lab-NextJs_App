import React from 'react'
import { Singers } from '../data/data'

const SingerCard = ({name, id , initials}: Singers) => {
  return (
    <div>
      <div key={id} className='border border-black m-5 rounded-r-xl'>
            <div className='flex '>
            <h1 className='mr-2 rounded-full border border-black p-1 m-1 '>{initials}</h1>
            <h1 className='p-1 m-1'>{name}</h1>
            </div>
          </div>
    </div>
  )
}

export default SingerCard