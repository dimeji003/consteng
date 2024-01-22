'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

export default function Backtotop() {
  const [isVisible, setIsVisible] = useState(false)

  function handleScroll(){
    if (window.scrollY > 100) {
      setIsVisible (true)
    } else {
      setIsVisible (false)
    }
  }

  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button onClick={scrollToTop} className={`${isVisible ? 'block' : 'hidden'} text-4xl bg-black p-1 fixed z-20 bottom-6 right-0`}><FaArrowUp className='text-white text-2xl'/></button>
  )
}
