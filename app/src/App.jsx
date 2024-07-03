import { useState } from 'react'
import './App.css'
import MainContent from "../../components/MainContent.jsx"
import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
