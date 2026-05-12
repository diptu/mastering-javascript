import React, { useState } from 'react'
import Products from './Products'


const ProductList = (props) => {

    return (
        <div className='row'>
            <div>
                <ul class="list-group shadow">
                    {
                        props.newProductList.map(product =>
                            <Products
                                id={product?.pID}
                                name={product?.pName}
                                description={product?.desc}
                                imgUrl={product?.image}
                                price={product?.price}
                                isAvailable={product.isAvailable}

                            ></Products>

                        )};

                </ul>
            </div>
        </div>

    )
}

export default ProductList
