
import { Link } from "react-router-dom"

const Products = () => {
    return (
        <section>
            <h1>The Products Page.</h1>
            <ul>
                <li>
                    <Link to="/products/hot-wings">Hot Wings</Link>
                </li>
                <li>
                    <Link to="/products/cheesburger">Cheeseburger</Link>
                </li>
                <li>
                    <Link to="/products/pizza">Pizza</Link>
                </li>
            </ul>
        </section>
    )
}

export default Products