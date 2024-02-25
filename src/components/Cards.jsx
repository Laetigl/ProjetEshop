import React, { useState } from 'react'

export default function Cards(props) {
  const[quantity,setQuantity] = useState(props.element.stock)

  {quantity<0 ? setQuantity(0) : "none"}

  const[stockBasket,setStockBasket] = useState(0)
  {props.quantityBasket>props.element.stock ? props.setQuantityBasket(props.element.stock) : "none"}

  let add = ()=>{
    if (props.element.stock<1) {
      props.element.stock=0;
    }
    else{
      props.element.stock--;
    };
    if (props.element.stock>(-1)) {
      props.element.quantity++
    }
    else{ }
   
  }
  return (   
    <div className='max-sm:w-[200px] lg:w-[350px] lg:p-[20px]'>
      <div className='w-[100%] h-fit rounded-[10px] bg-[#e9e9e7] pb-[10px] flex flex-col justify-center items-center shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
          <img className='w-[150px] flex justify-center items-center' src={props.img} alt="" />
          <div className='textCard'>
              <h1 className='font-bold text-[#4e251e] tracking-widest'>{props.element.marque}</h1>
              <div className='flex flex-col justify-start items-start p-[10px] tracking-wide'>
                <p className='text-[12px] text-[#8d6e46]'>{props.element.description}</p>
                <p className='text-[10px] text-[#8d6e46]'>prix: {props.element.prix}€</p>
                <p className='text-[10px] text-[#8d6e46]'>stock: {props.element.stock==1?'derniere chance':props.element.stock}</p>
              </div>
          {
            props.element.stock >0 && props.myMoney >0 ?
          <button className={`text-[10px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest font-bold`} 
          onClick={()=>{{props.element.stock>0 ? props.setSlide(1):""}; 
                        {props.element.stock>0 && props.element.quantity<1? props.addingAll(props.element):"" } ;
                        {props.element.stock>0 && props.element.quantity<1? props.addingImg(props.element.image):"" };
                        
                        {props.setQuantityBasket(props.quantityBasket+1)};
                       
                        add();
                       {};
                        {props.addingPrice(props.element.prix)} ;
                        {props.setMyMoney(props.myMoney - props.element.prix)};
                        {props.addingDescription(props.element.description)}
                        }}>      
          {props.element.stock === 0? "OUT OF STOCK":"ADD TO BASKET"}</button>
          :
          <button disabled className={`text-[10px] text-white bg-[#8d6e46] rounded-[5px] p-[5px] border-[2px] border-[#4e251e] items-center justify-center cursor-pointer tracking-widest font-bold`} >      
          {props.element.stock == 0? "OUT OF STOCK":"ADD TO BASKET"}</button>
          }
          </div>
      </div>      
    </div>
  )
  }