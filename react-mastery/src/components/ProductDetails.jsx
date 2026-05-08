
let style = {
    padding: '0px 20px',
    fontSize: 12
}
let Productcount = 5
let isAvailable = 'Available'


function DisplayProductCount() {
    return Productcount > 0 ? Productcount : 'Zero';
}
const ProductDetails = ({ price, isAvailable }) => {

    let badgeClass = 'badge-margin-left-80 badge '
    badgeClass += isAvailable ? 'bg-success' : 'bg-danger'

    return (
        <div class="d-flex align-items-center justify-content-start mt-1">
            <h6 class="font-weight-bold my-2">Price	: ${price}</h6>
            <button className='btn btn-primary'>-</button>
            <span style={style}>{DisplayProductCount()}</span>
            <button className='btn btn-primary'>+</button>
            <span className={badgeClass}>{isAvailable ? 'Available' : 'Unvailable'}</span>

        </div>

    )
}

export default ProductDetails
