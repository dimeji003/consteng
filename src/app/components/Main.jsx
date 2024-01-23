import React from 'react'
import styles from './main.module.css'
import Navbar from './Navbar'
import { FaContao } from "react-icons/fa";



export default function Main() {
  return (
    <div className={styles.main}>
        <div>
            <Navbar/>

            <div className='flex flex-col items-center w-[80%] m-auto md:pt-36 pt-52 text-white py-7'>

                <div className='flex flex-col items-center border-b-2 border-[gold] text-3xl gap-6'>
                    <img src="/constenglogo.jfif" alt="consteng" width={100} height={100} />
                
                    <h2 className='text-white text-5xl font-bold'>CONSTENG</h2>
                    <p className='pb-5 text-2xl'>Construction Limited</p>
                    
                </div>
                <div className='pt-7 flex flex-col gap-4 items-center'>
                    <p className='text-center'><em>Building Dreams, Constructing Futures: Your Vision, Our Expertise</em></p>
                    <p className='border border-[gold] p-2'>VIEW OUR WORK</p>

                </div>
            


            </div>
        

        </div>

    </div>
  )
}
