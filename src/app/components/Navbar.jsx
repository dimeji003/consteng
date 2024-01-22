"use client"
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaContao } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Link from 'next/link';
import styles from './main.module.css'

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    

    function navbar(){
        setShowNav(!showNav)

    }
    function handleNav(){
      setShowNav(false)
    }
  return (
    <div>
        <nav className='bg-transparent flex flex-row justify-between px-3 md:px-6 h-12 md:py-2 items-center'>
            <div>
              <FaContao className='text-3xl md:text-4xl text-[gold]' />

            </div>
            <div> 
            <ul className={`bg-white md:bg-transparent  md:text-white md:gap-9    md:relative md:flex md:flex-row flex flex-col fixed h-[100vh] md:h-[100%] w-[100%] top-0 bottom-0 left-0 items-center justify-around transition-transform transform ease-in-out duration-300 ${showNav ? 'translate-x-0' : '-translate-x-full'} `}>
              
                <li><MdCancel className='cursor-pointer md:hidden text-3xl' onClick={navbar}/></li>
                <li className='transition duration-300 ease-in-out md:hover:border-b-2 border-[gold]'>HOME</li>
                <Link href='#whatwedo' onClick={handleNav}>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>WHAT WE DO</li>
                </Link>
                <Link href='#about' onClick={handleNav}>
                <li className='transition ease duration-500 md:hover:border-b-2 border-[gold]'>ABOUT US</li>
              </Link>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>OUR WORK</li>
                <li className='md:transition md:ease-in-out duration-100 md:hover:border-b-2 border-[gold]'>CONTACT US</li>
            </ul>
            <CiMenuFries onClick={navbar} className='text-3xl md:hidden cursor-pointer text-[gold]' />

            </div>
            
        </nav>
    </div>
  )
}
