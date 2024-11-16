import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '/public/new7.png'

export default function Navbar (){
  return (
    <nav className='flex border p-6 bg-pink-100 items-center '>
      <Image
      src={logo}
      alt='logo'
      width={40}
      placeholder='blur'
      className='rounded-full'
      />
        <h2 className='font-medium text-pink-400 pl-3'>NextJs</h2>
        <li className='list-none ml-5 hover:text-pink-400 font-normal '><Link href="/">Dashboard</Link></li>
        <li className='list-none ml-5 hover:text-pink-400 font-normal'><Link href="/tickets">Tickets</Link></li>
    </nav>
  )
}
