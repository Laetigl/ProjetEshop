import React, { useState, useTransition } from 'react'
import './App.css'
import Cards from './components/Cards'

import skate1 from "../src/assets/images/skate1.png"
import skate2 from "../src/assets/images/skate2.png"
import skate3 from "../src/assets/images/skate3.png"
import skate4 from "../src/assets/images/skate4.png"
import skate5 from "../src/assets/images/skate5.png"
import skate6 from "../src/assets/images/skate6.png"
import skate7 from "../src/assets/images/skate7.png"
import skate8 from "../src/assets/images/skate8.png"
import skate9 from "../src/assets/images/skate9.png"
import skate10 from "../src/assets/images/skate10.png"
import skate11 from  "../src/assets/images/skate11.png"
import skate12 from  "../src/assets/images/skate12.png"

import data from "../src/assets/skate.json"
import Basket from './components/Basket'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Header from './components/Navbar'

function App() {

  const[myMoney,setMyMoney]=useState(200)

  let arraySkate = [skate1,skate2,skate3,skate4,skate5,skate6,skate7,skate8,skate9,skate10,skate11,skate12]
  const[slide,setSlide] = useState(0) 
  const[price,setPrice]= useState([
  ])
  const[shopping,setShopping]= useState([
  ])
  // const[descriptive,setDescriptive]=useState((data).map(element => element.description))
  // console.log(descriptive);

  const[arrayDescriptive,setArrayDescriptive] = useState([

  ])

  let addingDescription = (item) => {
    setArrayDescriptive([...arrayDescriptive, (item)])
  }

  let adding = (itemun) => {
    setShopping([...shopping, (itemun)])
  }

  
  // Fonction va permettre de récuperer la valeur de la carte et le tableau vide va récupérer ces valeurs du json
  const[imgBasket,setImgBasket] = useState([

  ])
  let addingImg = (item) => {
    setImgBasket([...imgBasket, (item)])
  }
  let addingPrice = (item)=>{
    setPrice([...price,(item)])
  }

  const[quantityBasket,setQuantityBasket] = useState(0)

  const[discard,setDiscard] = useState(0)

  return (
    <section className='w-[100vw] relative'>
      <Header></Header>
      <Resume setSlide={setSlide} ></Resume>
      <div className='flex flex-wrap p-2 justify-center items-center gap-2 pt-[60px]'>
        {data.map((element, key) => (
            <div key={key}>
              <Cards
                element={element}
                img={arraySkate[element.image]}
                setSlide={setSlide}
                adding={adding}
                addingImg={addingImg}
                addingPrice={addingPrice}
                addingDescription={addingDescription}
                setImgBasket={setImgBasket}
                setQuantityBasket={setQuantityBasket}
                quantityBasket={quantityBasket}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
              ></Cards>
            </div>
        ))}
      </div>   
      <Basket slide={slide} setSlide={setSlide} shopping={shopping} image={arraySkate} imgBasket={imgBasket} quantityBasket={quantityBasket} price={price} setPrice={setPrice} discard={discard} setDiscard={setDiscard} arrayDescriptive={arrayDescriptive} setArrayDescriptive={setArrayDescriptive} setMyMoney={setMyMoney} myMoney={myMoney} prix={data.prix}></Basket>  
      <Footer></Footer>
    </section>
  )
}
export default App