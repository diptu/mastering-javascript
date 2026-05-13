import React, { useState, useId } from 'react'
import Products from './Products'


const ProductList = (props) => {

    if (props.newProductList.length === 0)
        return (<h3>No product found</h3>)





    return (

        <ul class="list-group shadow">
            {
                props.newProductList.map(product =>

                    <Products
                        key={product?.pID}
                        id={product?.pID}
                        name={product?.pName}
                        description={product?.desc}
                        imgUrl={product?.image}
                        price={product?.price}
                        isAvailable={product.isAvailable}

                    ></Products>

                )};

        </ul>


    )
}

export default ProductList
