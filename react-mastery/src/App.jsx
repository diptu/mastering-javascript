import { useState } from 'react'
import ProductDetails from './components/ProductDetails'
import './App.css'
import milkImg from './images/fresh-milk.png';
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


  return (
    <>
      <div className='row'>
        <div>
          <ProductDetails
            id={products[0].pID}
            name={products[0].pName}
            description={products[0].desc}
            imgUrl={products[0].image}
            price={products[0].price}

          >
          </ProductDetails>
          <ProductDetails
            id={products[1].pID}
            name={products[1].pName}
            description={products[1].desc}
            imgUrl={products[1].image}
            price={products[1].price}
          ></ProductDetails>

        </div>
      </div>
    </>
  )
}

export default App
