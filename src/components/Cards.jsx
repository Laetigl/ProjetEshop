import React from 'react'

export default function Cards(props) {

    return (   
      <div className='max-sm:w-[200px] flex '>
        <div className='w-[100%] h-fit rounded-[10px] bg-[#e9e9e7] pb-[10px]'>
            <img src={props.img} alt="" />
            <div className='textCard'>
                <h1 className='font-bold text-[#4e251e] tracking-widest'>{props.element.marque}</h1>
                <div className='flex flex-col justify-start items-start p-[10px] tracking-wide'>
                  <p className='text-[12px] text-[#8d6e46]'>{props.element.description}</p>
                  <p className='text-[10px] text-[#8d6e46]'>{props.element.prix}€</p>
                  <p className='text-[10px] text-[#8d6e46]'>Quantité : {props.element.stock}</p>
                </div>
            <button className='text-[10px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest'>AJOUTER AU PANIER</button>
            </div>
        </div>      
      </div>
    )
  }