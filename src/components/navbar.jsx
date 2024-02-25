import React from 'react'
import logo from './../assets/logo.png'
import banner from './../assets/style-skateur.jpg'
import './Navbar.css'

export default function Navbar() {
  return (
    <section>
    <div className='w-[100%] gap-[30%] bg-[#8c7758] h-[140px] flex justify-center items-center fixed z-10 '>
      <div className='flex flex-col justify-center items-center m-[40px]'>
        <h1 className='titleSkate'>Soul Skate</h1>
        <img src={logo} alt="" srcset="" className='md:size-[80px] max-sm:size-[80px] justify-center items-center' />
      </div>
      </div>
    <div className='bannier md:w-[100vw] bg-black  ' >
      {/* <img className='sm:opacity-25 ' src={banner} alt="" srcset="" /> */}
      <div className='h-[100%] w-[100%] bg-[#00000090]'></div>
    </div>
  
    </section>
  )
}
