import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='w-[100%]'>
      <Navbar />
    </section>
  )
}

export default App
