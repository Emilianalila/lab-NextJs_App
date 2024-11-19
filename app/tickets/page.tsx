import React from 'react'
import {singers} from  '@/app/data/data'
import SingerCard from '../components/SingerCard'

const page = () => {
  return (
    <div className='flex text-pink-500 font-bold w-full justify-between'>
      <div className='border-2 p-4 w-2/3'>
        <ul>
          <li>Shakira</li>
          <li>Thalia</li>
        </ul>
      </div>
      <div className='p-5 w-1/3 border'>
        <p className='ml-2 text-black underline'>top 10</p>
        {singers.map((singer)=>(
          <SingerCard key={singer.id} id={singer.id} name={singer.name} initials={singer.initials}/>
        ))}
      </div>
    </div>
  )
}

export default page