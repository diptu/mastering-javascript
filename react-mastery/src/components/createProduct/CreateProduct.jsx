import React from 'react'
import ProductForm from './ProductForm'
const CreateProduct = (props) => {
    const onCreateProduct = (product) => {
        props.createProduct(product)
    }
    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto' style={{ backgroundColor: "white", margin: "10px 20px", padding: "20px" }}>
                <ProductForm CreateProduct={onCreateProduct} />
            </div>
        </div>
    )
}

export default CreateProduct
