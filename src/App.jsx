import { useState } from 'react'
import './App.css'
import products from './products'
import Store from './components/Store.jsx'

function App() {



  return (
    <Store products = {products} />
  )
}

export default App
