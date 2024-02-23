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
  const array = [...new Set(props.all)];
 
  return (
    <div className={`flex  items-center flex-col w-[80%] lg:w-[400px] h-[100vh] bg-[#a48b6b] top-[0] fixed z-[10] ${props.slide == 1?"right-[0]" : "right-[-500px]"} duration-[0.7s] pt-[30px]`}>
        <button className='absolute right-[30px] top-[20px] text-white' onClick={()=>{props.setSlide(0)}}> <img src={close} className='w-[30px] ' alt="" /></button>
        <img className='w-[70px]' src={logoBasket} alt="" />
        <p className='w-[80%] h-[1px] bg-black'></p>
        <div className='flex flex-col gap-[10px] overflow-scroll '>

            {/* Pour l'image on a récupéré le tableau avec props.image et en mettant entre crochets on va récupérer l'index (valeur des cards prises du json) avec props.imgBasket */}
            {/* {props.imgBasket.map((element, key) => {
                setChooseImg([...chooseImg,element])
            })} */}

            {/* {props.shopping.map((element, key) => {
                return (
                    <div key={key} className={` ${props.discard == 0?"flex" :"hidden"}`}>
                        <img className='w-[150px]' src={props.image[props.imgBasket[key]]} alt="" />
                        <div className='flex flex-col gap-[20px] justify-center items-start'>
                            <div className='flex gap-[60px]'>
                                <h1 className='font-bold'>{element}</h1>
                                <button onClick={()=> {{props.setDiscard(1)}; {props.setMyMoney(props.myMoney+  props.price[key])}}}><img className="w-[30px] drop-shadow-2xl" src={remove} alt="" /></button>
                            </div>
                            <p>{props.arrayDescriptive[key]}</p>
                            <p>Quantité : {props.quantityBasket}</p>
                            <p>Prix : {props.price[key]}€</p>
                        </div>
                    </div>
                )
            })} */}

            {array.map((element, key) => {
                return (
                    <div key={key} className={`flex ${element.quantity<1?`hidden`:``}`}>
                        <img className='w-[150px]' src={props.image[props.imgBasket[key]]} alt="" />
                        <div className='flex flex-col gap-[20px] justify-center items-start'>
                            <div className='flex gap-[60px]'>
                                <h1 className='font-bold'>{element.marque}</h1>
                                <button onClick={()=> {element.quantity-- ;element.stock++}}><img className="w-[30px] drop-shadow-2xl" src={remove} alt="" /></button>
                            </div>
                            <p>{props.arrayDescriptive[key]}</p>
                            <p>Quantité : {element.quantity}</p>
                            <p>Prix : {element.prix}€</p>
                        </div>
                    </div>
                )
            })}

            {/* <ul>
                {props.shopping.map((item, index) => (
                    <li key={index}>
                        <div><img src="" alt="" /></div>
                        <div>
                            <p>{item.marque}</p>
                            <p>{item.description}</p>
                            <p>{item.prix}</p>
                            <p>TEST</p>
                        </div>
                    </li>
                ))}
            </ul> */}


        </div>
        <div className='flex justify-start items-start'>
            <h1>TOTAL : {totalPrice}€</h1>
            {console.log(totalPrice)}
        </div>
        <div className='flex justify-center items-center mt-[30px]'>
            <button className='text-[20px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest'>PAY</button>
        </div>
        <div className='flex'>
            <h3>SOLDE :{props.myMoney}€</h3>
            {console.log(props.myMoney)}

        </div>
    </div>
  )
}