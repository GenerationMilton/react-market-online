import { createContext, useState } from "react";

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children}) =>{

    // Shopping Cart * Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail * Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout-side-menu * Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]= useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}