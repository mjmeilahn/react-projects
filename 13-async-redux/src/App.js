
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendCartData } from './store/cart-slice'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const showCart = useSelector(state => state.ui.cartIsVisible)

  /*
    COMMON PATTERN TO HANDLE ASYNC REQUESTS THAT UPDATES STATE IN REDUX. THE REDUCERS WITHIN REDUX SHOULD NEVER CONTAIN ASYNCHRONOUS CODE. DELEGATE THOSE OPERATIONS HERE IN "useEffect()" OR CREATE YOUR OWN ACTION CREATOR "THUNK" WHICH PROCESSES ASYNC REQUESTS. "sendCartData" HERE HAPPENS TO BE LOCATED IN A SLICE FILE BUT CAN BE PLACED ANYWHERE.
  */
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
