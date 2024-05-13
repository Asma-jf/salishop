
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { products } from "../../types/servers";

function Store() {
    const[products,setProducts]= useState<products[]>([])
    useEffect(()=>{
        getProducts().then((result)=>{
            setProducts(result)
        })
    },[])
    return (
        <div>
            <Container>
                <h1 className='text-right mt-5'>جدیدترین محصولات</h1>
                <div className='grid grid-cols-4 gap-10 mt-4'>
                    {products.map((item)=>(
                        <Link to={`/product/${item.id}`}>
                        <ProductItem {...item} />
                        </Link>
                    )
                    )}
                </div>
            </Container>
        </div>
    )
}
export default Store;