import { Routes, Route } from "../node_modules/react-router-dom/dist/index"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import { Shoppingcartprovider } from "./context/Shoppingcartcontext"

function App() {


  return (
    <Shoppingcartprovider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Layout>
    </Shoppingcartprovider>

  )
}

export default App
