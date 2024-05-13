
import Container from "../../components/container/Container"
import { shoppingcartcontext, useshoppingcartcontext } from "../../context/Shoppingcartcontext"


function Cart() {
  const{cartItems}= useshoppingcartcontext()
  return (
    <>
        <Container>
            <img src="" alt="" />
            <h1>محصول اول</h1>
        </Container>
      
    </>
  )
}

export default Cart
