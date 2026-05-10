import { useState } from 'react'
import ProductList from './components/product/ProductList'
import './App.css'
import CreateProduct from './components/createProduct/CreateProduct'


function App() {


  return (
    <>
      <CreateProduct />
      <ProductList />
    </>
  )
}

export default App
