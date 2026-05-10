import React from 'react'
import ProductForm from './ProductForm'
const CreateProduct = () => {
    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto' style={{ backgroundColor: "white", margin: "10px 20px", padding: "20px" }}>
                <ProductForm />
            </div>
        </div>
    )
}

export default CreateProduct
