import { createContext, useEffect, useState } from "react";

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
    const [productToShow, setProductToShow]= useState({})

    //Get products
    const[ items, setItems ] = useState(null)
    
    const[ filteredItems, setFilteredItems] = useState(null)

    //get products by title
    const[searchTitle, setSearchByTitle] = useState(null)

    useEffect( ()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))

    }, [])

    //Shopping Cart * Add products to cart
    const[ cartProducts, setCartProducts] = useState([])


    //Shopping cart * Order
    const [ order, setOrder] = useState([])

    //console.log('COUNT: ', count)

    const filteredItemsByTitle =( items, searchByTitle)=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect( ()=> {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}