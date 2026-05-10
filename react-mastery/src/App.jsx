import { useState } from 'react'
import ProductList from './components/product/ProductList'
import './App.css'
import CreateProduct from './components/createProduct/CreateProduct'


function App() {
  let [product, updateProduct] = useState('')
  const createProduct = (product) => {
    updateProduct(product)
  }


  return (
    <>
      <CreateProduct createProduct={createProduct} />
      <ProductList newProduct={product} />
    </>
  )
}

export default App
