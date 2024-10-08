import React from 'react'
import ItemCardSkeleton from '../components/ui/Skeleton/ItemCardSkeleton'

const getProducts = async() => {
    const data = await fetch(`http://localhost:3000/api/productos`)
    const productos = await data.json()
    return productos
}

const Loading = async(params) => {
    const productCount = await getProducts()
    return (
    <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center align-center'>
            {productCount.map((el, index) => (
                <div key={index}>
                    <ItemCardSkeleton />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Loading