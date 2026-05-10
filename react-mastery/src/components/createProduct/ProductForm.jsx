import React, { useState } from 'react'
import CreateProduct from './CreateProduct'

const ProductForm = (props) => {


    let [userInput, updateUserInput] = useState(
        {
            pName: '',
            pPrice: 0,
            pDescription: '',
            pAvailability: true,
            pImage: ''
        }
    )


    let nameInputHandler = (event) => {

        updateUserInput((prevState) => {
            return {
                ...prevState,
                pName: event.target.value
            }
        })

    }
    let priceInputHandler = (event) => {

        updateUserInput((prevState) => {
            return {
                ...prevState,
                pPrice: event.target.value
            }
        })


    }
    let descriptionInputHandler = (event) => {
        updateUserInput((prevState) => {
            return {
                ...prevState,
                pDescription: event.target.value
            }
        })
    }
    let availabilityInputHandler = (event) => {
        updateUserInput((prevState) => {
            return {
                ...prevState,
                pAvailability: event.target.checked
            }
        })
    }

    let imageInputHandler = (event) => {
        updateUserInput((prevState) => {
            return {
                ...prevState,
                pImage: event.target.value
            }
        })
    }

    const CreateProductEventHandler = (event) => {
        event.preventDefault();
        let product = {

            pId: 6,
            pName: userInput.pName,
            desc: userInput.pDescription,
            isAvailable: Boolean(userInput.pAvailability),
            image: userInput.pImage,
            price: Number(userInput.pPrice)
        }
        props.CreateProduct(product)
        // Crear the form - 2 way data binding
        updateUserInput(
            {
                pName: '',
                pPrice: '',
                pDescription: '',
                pAvailability: false,
                pImage: ''
            }
        )
    }
    return (

        <form className="row g-3" onSubmit={CreateProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    value={userInput.pName}
                    onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    value={userInput.pPrice}
                    onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    value={userInput.pDescription}
                    onChange={descriptionInputHandler} />
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={userInput.pAvailability}
                    onChange={availabilityInputHandler} />
                <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={userInput.pImage} onChange={imageInputHandler} />
            </div>


            <button type="submit" className="btn btn-primary">Add Product</button>
        </form >
    )
}

export default ProductForm
