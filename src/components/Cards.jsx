import React, { useState } from 'react'

export default function Cards(props) {
  const[quantity,setQuantity] = useState(props.element.stock)

  {quantity<0 ? setQuantity(0) : "none"}

  const[stockBasket,setStockBasket] = useState(0)
  {props.quantityBasket>props.element.stock ? props.setQuantityBasket(props.element.stock) : "none"}

  return (   
    <div className='max-sm:w-[200px]'>
      <div className='w-[100%] h-fit rounded-[10px] bg-[#e9e9e7] pb-[10px] flex flex-col justify-center items-center shadow-lg'>
          <img className='w-[150px] flex justify-center items-center' src={props.img} alt="" />
          <div className='textCard'>
              <h1 className='font-bold text-[#4e251e] tracking-widest'>{props.element.marque}</h1>
              <div className='flex flex-col justify-start items-start p-[10px] tracking-wide'>
                <p className='text-[12px] text-[#8d6e46]'>{props.element.description}</p>
                <p className='text-[10px] text-[#8d6e46]'>{props.element.prix}€</p>
                <p className='text-[10px] text-[#8d6e46]'>Quantité : {quantity}</p>
              </div>
          <button className={`text-[10px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest font-bold`} 
          onClick={()=>{{quantity>0 ? props.setSlide(1):""}; 
                        {quantity>0 && stockBasket<1? props.adding(props.element.marque):"" } ;
                        {quantity>0 && stockBasket<1? props.addingImg(props.element.image):"" };
                        setQuantity(quantity-1);
                        {props.setQuantityBasket(props.quantityBasket+1)};
                        {setStockBasket(stockBasket+1)}
                        {props.addingPrice(props.element.prix)} ;
                        }}>      
          {quantity == 0? "OUT OF STOCK":"ADD TO BASKET"}</button>
          </div>
      </div>      
    </div>
  )
  }