// 1. Import the image at the top
import productImg from "../images/ideapad-slim-3-15.webp";
let style = {
    padding: '0px 20px',
    fontSize: 12
}
let Productcount = 5
let isAvailable = 'Available'

let badgeClass = 'badge-margin-left-80 badge '
badgeClass += isAvailable === 'Available' ? 'bg-success' : 'bg-danger'
function DisplayProductCount() {
    return Productcount > 0 ? Productcount : 'Zero';
}
const ProductDetails = ({ id, name, description, imgUrl, price }) => {
    return (
        <ul class="list-group shadow">
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div class="media-body order-2 order-lg-1">
                        <h5 class="mt-0 font-weight-bold mb-2">{name}</h5>
                        <p class="font-italic text-muted mb-0 small">{description}</p>
                        <div class="d-flex align-items-center justify-content-start mt-1">
                            <h6 class="font-weight-bold my-2">Price	: ${price}</h6>
                            <button className='btn btn-primary'>-</button>
                            <span style={style}>{DisplayProductCount()}</span>
                            <button className='btn btn-primary'>+</button>
                            <span className={badgeClass}>{isAvailable}</span>

                        </div>
                    </div><img src={imgUrl} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>
            </li>
        </ul>

    )
}

export default ProductDetails
