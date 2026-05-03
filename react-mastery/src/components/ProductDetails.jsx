let Productcount = 5

function DisplayProductCount() {
    return Productcount > 0 ? Productcount : 'Zero';
}
const ProductDetails = () => {
    return (
        <ul class="list-group shadow">
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div class="media-body order-2 order-lg-1">
                        <h5 class="mt-0 font-weight-bold mb-2">Lenovo IdeaPad Slim 3 15IAN8 Core i3 N305 15.6" FHD Laptop</h5>
                        <p class="font-italic text-muted mb-0 small">The Lenovo IdeaPad Slim 3 15IAN8 82XB00DXLK is a sleek and reliable 15.6-inch Full HD laptop powered by the efficient Intel Core i3-N305 processor, which features 8 cores and 8 threads with speeds of up to 3.8 GHz. Designed for smooth multitasking, it comes equipped with 8GB LPDDR5-4800 RAM and a fast 512GB M.2 PCIe 4.0x4 NVMe SSD, ensuring quick boot times and ample storage. The anti-glare TN display offers a crisp 1920x1080 resolution and 250nits brightness, complemented by an 88% screen-to-body ratio for immersive viewing</p>
                        <div class="d-flex align-items-center justify-content-start mt-1">
                            <h6 class="font-weight-bold my-2">Price	: 55,500৳</h6>
                            <button className='btn btn-primary'>-</button>
                            <span>{DisplayProductCount()}</span>
                            <button className='btn btn-primary'>+</button>

                        </div>
                    </div><img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15ian8/ideapad-slim-3-15ian8-02-500x500.webp" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>
            </li>
        </ul>

    )
}

export default ProductDetails
