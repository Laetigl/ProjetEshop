import React from 'react'
import ig from "../assets/images/icons/ig.png"
import fb from "../assets/images/icons/facebook.png"
import twitter from "../assets/images/icons/twitter.png"

export default function Footer() {
  return (
    <div className='w-[100%] p-[10px] bg-[#8d6e46] flex flex-col gap-[7px]'>
        <h1 className="text-[#e9e9e7] text-[30px]">Souls Skate</h1>
        <p className='text-[10px]'>	&#169; Copyright 2024, Souls Skate. All Rights Reserved.</p>
        <div className='flex gap-[20px] justify-center items-center'>
            <a href="https://www.instagram.com/volcom/"> <img src={ig} className="w-[45px]" alt="" /></a>
            <a href="https://www.facebook.com/Volcom"> <img src={fb} className="w-[45px]" alt="" /></a>
            <a href="https://twitter.com/volcom"> <img src={twitter} className="w-[45px]" alt="" /></a>
        </div>
    </div>
  )
}
