import React from 'react'
import ProductForm from './ProductForm'
const CreateProduct = (props) => {
    const onCreateProduct = (product) => {
        props.createProduct(product)
    }
    return (

        <div style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: 2 }}>
            <ProductForm CreateProduct={onCreateProduct} />
        </div>

    )
}

export default CreateProduct
