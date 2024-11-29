import { createContext, useState } from "react";

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children}) =>{

    // Shopping Cart * Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail * Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    //Product Detail  * show product
    const [productToShow, SetProductToShow]= useState({})

    //Shopping Cart * Add products to cart
    const[ cartProducts, setCartProducts] = useState([])

    console.log('COUNT: ', count)

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            SetProductToShow,
            cartProducts,
            setCartProducts

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}