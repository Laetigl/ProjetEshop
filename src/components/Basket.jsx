import React, { useState } from 'react'
import close from "../assets/images/close.png"
import dataSkate from "../assets/skateSidebar.json"
import remove from "../assets/images/remove.png"
import logoBasket from "../assets/images/logoSkate.png"

export default function Basket(props) {
const[chooseImg,setChooseImg] = useState([

])

let totalPrice = props.price.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  return (
    <div className={`flex  items-center flex-col w-[80%] h-[100vh] bg-[#a48b6b] top-[0] fixed ${props.slide == 1?"right-[0]" : "right-[-500px]"} transition-[10s] pt-[30px]`}>
        <button className='absolute right-[30px] top-[20px] text-white' onClick={()=>{props.setSlide(0)}}> <img src={close} className='w-[30px] ' alt="" /></button>
        <img className='w-[70px]' src={logoBasket} alt="" />
        <p className='w-[80%] h-[1px] bg-black'></p>
        <div className='flex flex-col gap-[10px] overflow-scroll'>
            {/* Pour l'image on a récupéré le tableau avec props.image et en mettant entre crochets on va récupérer l'index (valeur des cards prises du json) avec props.imgBasket */}
            {/* {props.imgBasket.map((element, key) => {
                setChooseImg([...chooseImg,element])
            })} */}

            {props.shopping.map((element, key) => {
                return (
                    <div key={key} className='flex'>
                        <img className='w-[150px]' src={props.image[props.imgBasket[key]]} alt="" />
                        <div className='flex flex-col gap-[20px] justify-center items-start'>
                            <div className='flex gap-[60px]'>
                                <h1 className='font-bold'>{element}</h1>
                                <button><img className="w-[30px] drop-shadow-2xl" src={remove} alt="" /></button>
                            </div>
                            <p>Quantité : {props.quantityBasket}</p>
                            <p>Prix : {props.price[key]}€</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className=''>
            <h1>TOTAL : {totalPrice}€</h1>
            {console.log(totalPrice)}    
        </div>
        <div className='flex justify-center items-center mt-[30px]'>
            <button className='text-[20px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest'>PAYER</button>
        </div>
        <div>
            <h3>My money : €</h3>
        </div>
    </div>
  )
}