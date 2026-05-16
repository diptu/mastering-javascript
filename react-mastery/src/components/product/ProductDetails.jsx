import Button from "./Button";
import { useState } from "react";



const ProductDetails = ({ price, isAvailable, pCount }) => {
    const MAX_LIMIT = pCount;
    let [productCount, setProductCount] = useState(0)

    let increamentproductCount = () => {
        if (productCount < MAX_LIMIT)
            setProductCount(++productCount);
        console.log('Product Count incrementto :', productCount)
    }

    let decreamentproductCount = () => {

        if (productCount > 0)
            setProductCount(--productCount);
        console.log('Product Count incrementto :', productCount)
    }


    let badgeClass = 'badge-margin-left-80 badge '
    badgeClass += isAvailable ? 'bg-success' : 'bg-danger'

    return (
        <div class="d-flex align-items-center justify-content-start mt-1">
            <h6 class="font-weight-bold my-2">Price	: ${price}</h6>
            <Button eventHandler={decreamentproductCount} disable={productCount == 0}>-</Button>
            <span style={{
                padding: '0px 20px',
                fontSize: 12
            }}>{productCount}</span>
            <Button eventHandler={increamentproductCount} disable={productCount == MAX_LIMIT}>+</Button>
            <span className={badgeClass}>{isAvailable ? 'Available' : 'Unvailable'}</span>


        </div>

    )
}

export default ProductDetails
