import { parseCurrency } from '@/helpers/currency'
import { IProduct as IProduct } from '@/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import { AddToCart } from './AddToCart'
import { CartContext } from '@/cartContext'

export const Product = ({ product }: { product: IProduct }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const [cart, setCart] = useContext(CartContext)
  const onClickCart = (product: IProduct) => {
    setCart(
      cart.includes(product)
        ? cart.filter((item) => item.id !== product.id)
        : cart.concat(product)
    )
  }
  return (
    <article
      key={product.id}
      className="bg-indigo-100 rounded-lg p-5 flex-col flex gap-3"
    >
      <div className="h-80">
        <img
          src={product.image}
          alt={product.description}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-indigo-900">{product.title}</h2>
        <span className="text-indigo-700 font-bold text-lg">
          {mounted && parseCurrency(product.price)}
        </span>
      </div>

      <p className="text-indigo-900">{product.description}</p>
      <AddToCart
        isOnCart={cart.includes(product)}
        onClick={() => onClickCart(product)}
      />
    </article>
  )
}
