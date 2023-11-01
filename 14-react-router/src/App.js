
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom'
import Welcome from './components/Welcome'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

/*
  THIS EXAMPLE IS IN LEGACY VERSION OF REACT ROUTER, v5.3.0

  Q: WHY DID REACT ROUTER CHANGE SO MUCH? WHY REACT ROUTER 6?
  A: THEY WANTED A <Route/> COMPONENT TO PASS RELATIVE PATHS WITHOUT PATTERN MATCHING ALL THE TIME BUT THIS COULD HAVE BEEN DONE BETTER IN REACT ROUTER 6 TO KEEP THE BEST PARTS OF REACT ROUTER 5 IMO.

  IN REACT ROUTER 6:
  1. EVERY <Route/> MUST BE NESTED IN <Routes/>.
  2. <Switch/> BECOMES <Routes/>.
  3. <Route/> NO LONGER HAS CHILD COMPONENTS BUT AN "element" PROP TO PASS JSX.
  4. ORDER OF ROUTES NO LONGER MATTERS. MATCHES EXACT "path" STRINGS.
  5. "activeClassName" IS REMOVED FROM <NavLink/> USE DYNAMIC "className" TO RETURN AN ANONYMOUS FUNCTION WITH A SINGLE NAMED ARGUMENT TO DETERMINE IF "arg.isActive ? 'active' : ''".
  6. <Redirect/> BECOMES <Navigate replace to={}/>.
  7. PARENTS OF NESTED ROUTES MUST HAVE AN ASTERISK AFTER THEIR ROUTE PATH E.G. "/welcome/*".
  8. NESTED ROUTES MUST DROP THEIR PARENT PREFIX AND JUST SPECIFY THE NEW PARTS E.G. BEFORE: "/welcome/new-user" AFTER: "new-user" SAME GOES FOR <Link/> E.G. BEFORE: "/welcome/new-user" AFTER: "new-user".
  9. CONTENT FROM NESTED ROUTES IS SPECIFIED USING <Outlet/>.
  10. "useHistory" BECOMES "useNavigate".
*/


function App() {
  const location = useLocation()
  const history = useHistory()
  const queryParams = new URLSearchParams(location.search)
  const isSortAsc = queryParams.get('sort') === 'asc'

  const sortWelcomeProducts = () => {
    history.push('/welcome/products?sort=asc')
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* NavLink components allow :active CSS state for styling */}
              <NavLink activeClassName="active" to="/welcome">Welcome</NavLink>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*
        <Route/> components can be declared anywhere. Best practices however is to declare routes in a dedicated file OR folder.
      */}
      <main>
        <Route path='/welcome'>
          <Welcome/>
          <Route path="/welcome/products">
            {!isSortAsc && <div>
              <p>Hot Wings</p>
              <p>Cheeseburger</p>
              <p>Pizza</p>
              <button onClick={sortWelcomeProducts}>Sort Products</button>
            </div>}
            {isSortAsc && <div>
              <h2>Sorted!</h2>
              <p>Cheeseburger</p>
              <p>Hot Wings</p>
              <p>Pizza</p>
            </div>}
          </Route>
        </Route>

        <Switch>
          {/*
            <Switch> will render the first matching <Route> pattern.
            <Products/> will always render here in a <Switch/>.
            You could re-organize the components where /products/:id is shown before /products to eliminate this problem OR have the "exact" keyword on the 1st <Route/> as shown.
          */}
          <Route path='/products' exact>
            <Products/>
          </Route>

          <Route path='/products/:id'>
            <ProductDetail/>
          </Route>

          {/* Universal Redirect from a 404 Page Note Found */}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>

        <h2>Displayed on all routes.</h2>
      </main>
    </div>
  )
}

export default App
