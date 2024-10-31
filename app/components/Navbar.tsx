import Link from 'next/link'
import React from 'react'

export default function Navbar (){
  return (
    <nav className='flex border p-6 bg-pink-100 '>
        <h2>❥NextJs</h2>
        <li className='list-none ml-3'><Link href="/">Dashboard</Link></li>
        <li className='list-none ml-3'><Link href="/tickets">Tickets</Link></li>
    </nav>
  )
}
