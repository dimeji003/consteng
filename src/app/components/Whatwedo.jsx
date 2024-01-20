import React from 'react'
import { FaRoad } from "react-icons/fa6";
import { FaBridge } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineTraffic } from "react-icons/md";
import { BsFillCloudRainFill } from "react-icons/bs";
import { FaEnvira } from "react-icons/fa6";

export default function Whatwedo() {
  return (
    <div className='py-12'>
        <h2 className='border-b border-[gold] w-[55%] text-center text-4xl  pb-3 m-auto'>What We Do</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 py-6 w-[90%] m-auto items-center gap-11'>
            <div className='flex flex-col items-center gap-4'>
            <FaRoad className='text-6xl  text-[gold]'/>
            <h2 className='text-2xl text-center'>Road Construction</h2>
            <p className='text-center'>At our construction company, we take a comprehensive approach to road construction. From meticulous planning and innovative design to the execution of the physical construction, our team ensures the development of durable and efficient road networks. We pride ourselves on adapting to the evolving needs of communities, delivering projects that stand as testaments to quality craftsmanship.</p>

            </div>
            <div className='flex flex-col items-center gap-4'>
            <FaBridge className='text-6xl text-[gold]'/>
            <h2 className='text-2xl text-center'>Bridge Construction</h2>
            <p className='text-center'>Our construction company specializes in the design and construction of robust bridges. Leveraging our expertise in engineering solutions and precise construction techniques, we deliver structures that not only meet but exceed safety and longevity standards. These bridges serve as vital links in transportation infrastructure, contributing to the connectivity and accessibility of regions.</p>

            </div>
            <div className='flex flex-col items-center gap-4'>
                <GrVmMaintenance className='text-6xl text-[gold]' />
                <h2 className='text-2xl text-center'>Highway Maintenance and Rehabilitation</h2>
                <p className='text-center'>Ensuring the longevity and safety of highways is at the core of our mission. Through routine maintenance and strategic rehabilitation efforts, we address wear and tear, keeping highways in optimal condition. Our commitment lies in providing a smooth and safe travel experience for all road users, supporting the continued growth and development of communities.</p>

            </div>
            <div className='flex flex-col items-center gap-4 place-content-center text-center'>
                <MdOutlineTraffic className='text-6xl text-[gold]'/>
                <h2 className='text-2xl'>Traffic Management Systems</h2>
                <p className='text-center'>At our construction company, we take pride in implementing state-of-the-art traffic management systems. By installing and maintaining traffic signals, road signs, and intelligent transportation systems, we contribute to efficient traffic flow. Our efforts enhance overall safety, reduce congestion, and ensure an improved transportation experience for everyone in the community.</p>


            </div>
            <div className='flex flex-col items-center gap-4 text-center'>
                <BsFillCloudRainFill className='text-6xl text-[gold]'/>
                
                <h2 className='text-2xl'>Drainage and Stormwater Management</h2>
                <p>Our dedication to sustainable infrastructure extends to the design and implementation of effective drainage systems. Through the installation of culverts, stormwater management infrastructure, and erosion control measures, we go beyond industry standards. Our eco-friendly solutions mitigate environmental impact, ensuring resilience and harmony with the natural surroundings.</p>

            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <FaEnvira className='text-6xl text-[gold]'/>
                <h2 className='text-2xl'>Environmental Compliance and Sustainability</h2>
                <p>Environmental responsibility is woven into the fabric of our projects. We are committed to incorporating eco-friendly construction practices, such as the use of recycled materials and minimizing environmental impact. Our focus on sustainability aligns with industry best practices, contributing to a resilient and eco-conscious future for the communities we serve.</p>

            </div>

        </div>
    </div>
  )
}
