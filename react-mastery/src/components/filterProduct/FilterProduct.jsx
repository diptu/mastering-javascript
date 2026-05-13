import React from 'react'
import './filterProduct.css'



const FilterProduct = (props) => {

    const onFilterValueChange = (event) => {
        // console.log(event.target.value)
        props.FilterValueSelected(event.target.value)
    }
    return (
        <div className='filter-area' onChange={onFilterValueChange}>
            <select name="isAvailable">
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div >
    )
}

export default FilterProduct
