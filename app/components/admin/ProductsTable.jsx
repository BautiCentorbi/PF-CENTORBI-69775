import React from 'react'
import PrimaryButton from '../ui/Buttons/PrimaryButton'

const ProductsTable = () => {
  return (
    <div>
        <PrimaryButton link={'/admin/create'} label={'Añadir un producto'}/>
    </div>
  )
}

export default ProductsTable