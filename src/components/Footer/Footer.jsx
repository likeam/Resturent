import React from 'react'
import {IoLocationSharp} from "react-icons/io5"
import { MdEmail} from "react-icons/md"
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='mt-20 text-white '>
            <div 
                data-aos="fade-down"
                className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
                <div>
                    <h1 className='py-10 text-3xl font-bold text-center text-yellow-50'>Contact Us</h1>
                    <div className='flex flex-col justify-between col-span-3 border-b-2 border-white sm:flex-row md:flex-row'>
                     
                      <div className='space-y-4 text-center '>
                            <div className='flex justify-center' >
                                <IoLocationSharp className='text-5xl '/>
                            </div>
                            <p>Shop # 4 Adda Gondlawala ,<br/>
                            Main GT Road Gujranwala<br/> 44569</p>
                        </div>
                        <div className='space-y-4 text-center '>
                            <div className='flex justify-center '>
                                <MdEmail className='text-5xl ' />
                            </div>
                            <div>
                                <p>info@gujranwalafood.com</p>
                                <p>hr@gujranwalafood.com</p>
                            </div>
                        </div>
                        <div className='space-y-4 text-center '>
                            <div className='flex justify-center '>
                                <FaPhone className='text-5xl ' />
                            </div>
                            <div>
                            <p>
                                +92-55-45589687-Sales & Services
                            </p>
                            <p>
                                +92-300-6644669 - Hiring Queries
                            </p>
                            <p>
                                +92-345-4433667 - Whatsapp
                            </p>
                        </div>
                        </div>
                      </div>
                        
                    
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <p>@ 2024 AR. All rights reserved.</p>
                    <div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditons </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer