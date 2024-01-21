import React from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function About() {
  return (
    <div className='flex flex-col md:flex-row bg-[#1f1f2e] gap-20 md:gap-0 text-white'>
        <div className='flex flex-col w-[95%] gap-9 m-auto py-6 md:w-[40%] md:m-0 p-8'>
            <div className='flex flex-row gap-4 items-start'>
              <div>
                <MdOutlineVerifiedUser className='text-6xl text-white' />

              </div>
             <div className='flex flex-col gap-3'>
                <h2 className='text-[gold]'>Experienced Engineers</h2>
                <p>A wealth of construction and project management experience within the business. Also fantastic working relationships with excellent subcontract trades.</p>
              </div>

            </div>
            <div className='flex flex-row gap-3 items-start'>
              <div>
                <MdOutlineVerifiedUser className='text-6xl text-white' />

              </div>
             <div className='flex flex-col gap-3'>
                <h2 className='text-[gold]'>Fully Insured</h2>
                <p>Significant levels of Public Liability, Employers Liability, Contract Works Insurance and Professional Indemnity Insurance. </p>
              </div>

            </div>
            <div className='flex flex-row gap-3 items-start'>
              <div>
                <MdOutlineVerifiedUser className='text-6xl text-white' />

              </div>
             <div className='flex flex-col gap-3'>
                <h2 className='text-[gold]'>Services</h2>
                <p>With a wealth of experience, we specialize in a diverse range of road construction services, including the design and construction of highways, bridges, and comprehensive road maintenance. Our team leverages cutting-edge technologies and industry best practices to ensure the success of every project..</p>
              </div>

            </div>
            <div className='flex flex-row gap-3 items-start'>
              <div>
                <MdOutlineVerifiedUser className='text-6xl text-white' />

              </div>
             <div className='flex flex-col gap-3'>
                <h2 className='text-[gold]'>Safety Record</h2>
                <p>Safety is our top priority, and our impeccable safety record is a testament to our commitment. We prioritize the well-being of our team and the communities we serve. Learn more about our safety initiatives and protocols that set the industry standard.</p>
              </div>

            </div>
            <div className='flex flex-row gap-3 items-start'>
              <div>
                <MdOutlineVerifiedUser className='text-6xl text-white' />

              </div>
             <div className='flex flex-col gap-3'>
                <h2 className='text-[gold]'>Community Impact</h2>
                <p>Beyond constructing roads and bridges, we actively contribute to the communities we work in. Our community impact initiatives range from supporting local businesses to educational programs. Learn how Consteng strives to be a positive force in every project's surroundings.</p>
              </div>

            </div>
            


        </div>


        <div className=' text-center flex flex-col md:gap-1 gap-8 bg-gray-100 md:py-9 md:w-[60%] md:h-[150vh] py-9  text-[#1f1f2e]'>
          <h2 className='border-b border-[gold] w-[60%] text-center text-4xl m-auto py-5 md:py-4'>About Us</h2>
          <p className='w-[95%] m-auto'>Welcome to Consteng Limited, a distinguished leader in road construction and infrastructure development since 1982. With a rich legacy of over four decades, we have continually demonstrated our commitment to excellence and innovation.

Our extensive range of services covers every aspect of road construction, including highway and bridge construction, road maintenance, traffic management systems, and comprehensive drainage networks. This breadth of expertise positions us as a versatile and reliable partner in the infrastructure development sector.

Noteworthy among our projects are the successful collaborations with the Lagos State Ministry of Works, including the construction of Alakuko - Alagbado Road in Agege and the development of Agbowa - Ewusho Road with master drainage networks for Lagsbrew. These projects showcase our dedication to delivering high-quality solutions that meet and exceed expectations.

At Consteng Limited, our experienced team places a strong emphasis on safety and quality in every project. This commitment is embedded in our company culture and contributes to our consistent success in the industry.

Beyond construction, we actively engage with communities, implementing sustainable practices and initiatives that have a positive impact on the environment. Our location at 16 Oreta Road, Igbogbo, Ikorodu, Lagos State, Nigeria, strategically positions us to contribute significantly to the ongoing infrastructure development of Lagos State.

Client satisfaction is paramount to our success. Explore testimonials from clients who have experienced our dedication to delivering high-quality, reliable, and innovative solutions.

Thank you for considering Consteng Limited as your road construction partner. With a legacy dating back to 1982, we stand ready to play a pivotal role in shaping the future of infrastructure development, ensuring sustainable and resilient communities for years to come. Your vision is our commitment, and we look forward to the opportunity to exceed your expectations.</p>

        </div>

    </div>
  )
}
