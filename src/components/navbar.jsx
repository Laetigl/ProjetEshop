import React from 'react'
import logo from './../assets/logo.png'
import panier from './../assets/panier.png'
import banner from './../assets/style-skateur.jpg'
import './Navbar.css'

export default function Navbar() {
  return (
    <section>
    <div className='w-[100%] gap-[30%] bg-[#8c7758] h-[80px] flex justify-center items-center fixed z-10 '>
      <img src={logo} alt="" srcset="" className='max-sm:ml-[35%] max-sm:size-[80px]' />
      <img src={panier} alt="" className='size-[50px] ' />
    </div>
    <div className='bg-black pt-20' >
      <img className='opacity-25' src={banner} alt="" srcset="" />
    </div>
  
    </section>
  )
}
