import ProductDetails from "./ProductDetails"

const ProductList = ({ id, name, description, imgUrl, price, isAvailable }) => {



    return (

        <li class="list-group-item">
            <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">{name}</h5>
                    <p class="font-italic text-muted mb-0 small">{description}</p>

                    <ProductDetails price={price} isAvailable={isAvailable} />
                </div><img src={imgUrl} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>


    )
}

export default ProductList
