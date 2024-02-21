import React from 'react'
import shoppingBag from "../assets/images/shoppingBag.png"

export default function Resume(props) {
  return (
    <div>
        <button onClick={()=> {props.setSlide (1)?"" : <Basket></Basket>}}><img className="w-[30px] absolute right-[30px]" src={shoppingBag} alt="" /></button>
    </div>
  )
}
