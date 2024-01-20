"use client"
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaContao } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    

    function navbar(){
        setShowNav(!showNav)

    }
  return (
    <div>
        <nav className='bg-transparent flex flex-row justify-between px-3 h-12 items-center'>
            <div>
              <FaContao className='text-3xl text-[gold]' />

            </div>
            <div>
            <ul className={`bg-white md:bg-transparent md:text-white md:gap-6   md:relative md:flex md:flex-row flex flex-col fixed h-[100vh] md:h-[100%] w-[100%] left-0 items-center justify-around ${showNav ? 'flex' : 'hidden'}`}>
                <li><MdCancel className='cursor-pointer md:hidden' onClick={navbar}/></li>
                <li className='transition duration-300 ease-in-out md:hover:border-b-2 border-[gold]'>HOME</li>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>ABOUT US</li>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>WHAT WE DO</li>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>OUR WORK</li>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>CONTACT US</li>
            </ul>
            <CiMenuFries onClick={navbar} className='text-3xl md:hidden cursor-pointer text-[gold]' />

            </div>
            
        </nav>
    </div>
  )
}
