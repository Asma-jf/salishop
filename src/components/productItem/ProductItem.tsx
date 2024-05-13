import { products } from "../../types/servers"

type tproductitem=products

function ProductItem({image,title,price,description}:tproductitem) {
  return (
    <div className="shadow border rounded">
        <img className="rounded-t" src={image} alt="" />
        <div className="flex justify-between flex-row-reverse p-4">
            <h3>{title}</h3>
            <span>{price}</span>
        </div>
        <div className="p-4">
            <p className="line-clamp-1 text-right">
                {description}
            </p>
        </div>

      
    </div>
  )
}

export default ProductItem
