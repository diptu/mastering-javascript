import { useState, useId } from 'react'
import ProductList from './components/product/ProductList'
import './App.css'
import FilterProduct from './components/filterProduct/FilterProduct'
import CreateProduct from './components/createProduct/CreateProduct'

import Products from "./components/product/Products"
import milkImg from './images/fresh-milk.png'
import cheeseImg from './images/cottage-cheese.png';
import brocoliImg from './images/brocoli.png';
import orangesImg from './images/oranges.png';
import oliveoilImg from './images/olive-oil.png';

let products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: milkImg,
    price: 12
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: cheeseImg,
    price: 10
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: brocoliImg,
    price: 15
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: orangesImg,
    price: 20
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: oliveoilImg,
    price: 14
  }
]


function App() {
  let [newProductList, updateNewProductList] = useState(products)
  let [filterTextValue, updatefilterTextValue] = useState('all')

  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === 'available')
      return product.isAvailable == true
    else if (filterTextValue === 'unavailable')
      return product.isAvailable == false
    else
      return product
  });

  const createProduct = (product) => {
    product.pID = newProductList.length + 1


    updateNewProductList([product, ...newProductList])
  }

  const onFilterValueSelected = (filterValue) => {

    updatefilterTextValue(filterValue)
  }

  return (
    <>
      <div className='row'>
        <div className='clol-lg-8 mx-auto'>

          <CreateProduct createProduct={createProduct} />
          <FilterProduct FilterValueSelected={onFilterValueSelected} />
          <ProductList newProductList={filteredProductList} />
        </div>
      </div>

    </>
  )
}

export default App
