import React from 'react'
import ProductsTable from '../components/admin/ProductsTable'

const AdminPage = () => {
  return (
    <div className='flex flex-col flex-grow h-[80vh] w-full items-center justify-center'>
      <ProductsTable />
    </div>
  )
}

export default AdminPage