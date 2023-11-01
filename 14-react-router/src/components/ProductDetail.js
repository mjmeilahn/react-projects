
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const params = useParams()
    const { id } = params

    return (
        <section>
            <h1>Product Detail</h1>
            <p>You can fetch data from the "{id}" URL param id.</p>
        </section>
    )
}

export default ProductDetail