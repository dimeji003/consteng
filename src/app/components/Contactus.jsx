import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contactus() {
  return (
    <div>
        <div className='flex flex-col md:flex-row bg-[#1f1f2e] py-8 md:py-0'>
            <div className='text-center py-8 md:w-[40%]'>
                <h2 className='text-white border-b border-[gold] text-3xl w-[55%] m-auto py-3'>Contact Us</h2>
                <form className='w-[90%] m-auto flex flex-col gap-7 py-7 relative'>
                    <input type="text" placeholder='Name' className='w-[100%] h-16 pl-4'  />
                    <input type="email" placeholder='Email Address' className='w-[100%] pl-4 h-16' />
                    <textarea name="message" placeholder='Message' id="" cols="30" rows="10" className='w-[100%] pl-4 h-28 pt-4'></textarea>
                    <button className='border border-white hover:border-[gold] transition ease duration-500 absolute right-0 bottom-0 text-white text-xs p-1  '>GET IN TOUCH</button>
                </form>
            </div>
            <div className='md:w-[60%]'>
              <div className='h-24 bg-black flex items-center'>
                <div className='text-4xl text-[gold] flex flex-row gap-3 w-[20%] m-auto '><FaWhatsappSquare /><IoMdMail /></div>

              </div>
                <div className=' bg-gray-100 py-8 '>
                  <p className='text-center w-[90%] m-auto py-10'>We look forward to working with clients who have an eye for detail and a love of high quality. If you are searching for a Huddersfield builder, we would be delighted to quote for your project.

                    We are a Huddersfield based builder but will consider projects in the surrounding areas including Kirklees, Wakefield, Barnsley, Sheffield and into the Peak District. 
                  </p>
                  <div className='w-[90%] m-auto flex flex-col gap-7'>
                    <div className='flex flex-row gap-16'><ImLocation className='text-4xl'/> <p>16 Oreta Road, Igbogbo, Ikorodu, Lagos State, Nigeria</p></div>
                    <div className='flex flex-row gap-16'><FaPhoneAlt className='text-2xl'/> <p>+2348075894251</p></div>
                    <div className='flex flex-row gap-16'><IoMdMail className='text-2xl'/> <p>constendlimited@yahoo.com</p></div>
                  </div>
                </div>
            </div>

        </div>

    </div>
  )
}
