import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import { useEffect, useState } from "react"
import { getsingleproduct } from "../../services/api"
import { products } from "../../types/servers"
import { useshoppingcartcontext } from "../../context/Shoppingcartcontext"

function Product() {
    const params = useParams()
    const [product, setproduct] = useState<products>()

    const { cartItems, handleincreaseproductqty } = useshoppingcartcontext()

    useEffect(() => {
        getsingleproduct(params.id as string).then((data) => {
            setproduct(data)
        })
    }, [])

    console.log(cartItems)

    return (
        <div>
            <Container>
                <div className="shadow h-96 mt-4 grid grid-cols-12">
                    <div className="bg-slate-400 col-span-7 text-right">
                        <h1>{product?.title}</h1>
                        <span>{product?.price}</span>
                        <p>{product?.description}</p>
                    </div>
                    <div className="col-span-5 p-5">
                        <img src={product?.image} alt="" />
                        <div>

                            <Button variant="primary" onClick={() => handleincreaseproductqty(parseInt(params.id as string))}>
                                add to cart
                            </Button>
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default Product
