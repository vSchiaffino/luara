import { IProduct } from '@/interfaces'
import React from 'react'
import { Product } from './Product'

export const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
