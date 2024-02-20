import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='w-[100%] h-[200px]'>
      
      <Footer></Footer>
    </section>
  )
}

export default App
