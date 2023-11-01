
import { Link, Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>The Welcome Page.</h1>
            <Route path="/welcome" exact>
                <ul>
                    <li>
                        <Link to="/welcome/products">See Welcome Products</Link>
                    </li>
                </ul>
            </Route>
        </div>
    )
}

export default Welcome