import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Whatwedo from './components/Whatwedo'
import About from './components/About'
import Contactus from './components/Contactus'
import Backtotop from './components/Backtotop'

export default function page() {
  return (
    <div>
  
      <Main />
      <Whatwedo/>
      <About/>
      <Contactus/>
      <Backtotop/>

    </div>

  )
}
