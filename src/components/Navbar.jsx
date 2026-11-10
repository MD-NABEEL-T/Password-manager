import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-around items-center px-4 h-14'>
        <div className="logo font-bold">passop</div>
        <ul>
            <li className='flex gap-4'>
                <a href='/' className='hover:font-bold'>Home</a>
                <a href='#' className='hover:font-bold'>About</a>
                <a href='#' className='hover:font-bold'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar