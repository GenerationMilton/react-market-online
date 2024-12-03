
import React, { useContext } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

export const Home = () => {

    const context = useContext(ShoppingCartContext)

  return (
    <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input 
            type='text' 
            placeholder='Search a product'
            className='rounded-lg border grid-cols-4 w-full max-w-screen-lg focus:outline-none'
            onChange={(event)=> context.setSearchByTitle(event.target.value)}></input>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                context.items?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            }
        </div>
       <ProductDetail/>
        
    </Layout>
  )
}


