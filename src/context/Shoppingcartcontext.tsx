import { createContext, useContext, useState } from "react";

export const shoppingcartcontext = createContext({} as shoppingcartcontext)
interface cartItem {
    id: number,
    qty: number
}
interface shoppingcartcontext {
    cartItems: cartItem[];
    handleincreaseproductqty: (id: number) => void
}

interface shoppingcartprovider {
    Children: React.ReactNode
}

export const useshoppingcartcontext = () => {
    return useContext(shoppingcartcontext)
}

export function Shoppingcartprovider({ Children }: shoppingcartprovider) {
    const [cartItems, SetcartItems] = useState<cartItem[]>([])
    const handleincreaseproductqty = (id: number) => {
        SetcartItems((currentItems) => {
            let selectedItem = currentItems.find(item => item.id == id)
            if (selectedItem == null) {
                return [...currentItems, { id: id, qty: 1 }]
            }
            else {
                currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    else {
                        return item
                    }
                }
                )
            }
        })
    }
    return (
        <shoppingcartcontext.Provider value={{ cartItems }}>
            {Children}
        </shoppingcartcontext.Provider>
    )
}