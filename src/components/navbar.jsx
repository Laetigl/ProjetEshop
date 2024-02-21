import React from 'react'
import logo from './../assets/logo.png'
import panier from './../assets/panier.png'
import banner from './../assets/style-skateur.jpg'
import './Navbar.css'

export default function Navbar() {
  return (
    <section>
    <div className='w-[100%] gap-[30%] bg-[#8c7758] h-[80px]  flex justify-center items-center fixed z-10 '>
      <img src={logo} alt="" srcset="" className='max-sm:ml-[35%] md:size-[80px] md:ml-[25%] max-sm:size-[80px]' />
      <img src={panier} alt="" className='size-[50px] ' />
    </div>
    <div className='bannier md:w-[100vw] bg-black pt-20 ' >
      {/* <img className='sm:opacity-25 ' src={banner} alt="" srcset="" /> */}
      <div className='h-[100%] w-[100%] bg-[#00000090]'></div>
    </div>
  
    </section>
  )
}
