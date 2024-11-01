import Link from 'next/link'
import React from 'react'

export default function Navbar (){
  return (
    <nav className='flex border p-6 bg-pink-100  '>
        <h2 className='font-medium text-pink-400'>❥NextJs</h2>
        <li className='list-none ml-5 hover:text-pink-400 font-normal '><Link href="/">Dashboard</Link></li>
        <li className='list-none ml-5 hover:text-pink-400 font-normal'><Link href="/tickets">Tickets</Link></li>
    </nav>
  )
}
