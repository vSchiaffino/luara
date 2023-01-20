import { parseCurrency } from '@/helpers/currency'
import { Product } from '@/interfaces'
import React from 'react'

export interface CartProps {
  cart: Product[]
}

export const Cart = ({ cart }: CartProps) => {
  const sendWhatsapp = () => {
    const message = cart
      .map((product) => `* ${product.title} - ${parseCurrency(product.price)}`)
      .join('\n')
      .concat(
        '\n\nTotal: ' +
          parseCurrency(cart.reduce((acc, product) => acc + product.price, 0))
      )

    window.open(`https://wa.me/1131334144?text=${encodeURIComponent(message)}`)
  }
  return (
    <div className="fixed bottom-0 w-full flex">
      <div
        className="mx-auto w-1/2 py-4 rounded-t-lg 
        bg-emerald-500 text-center text-white font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
        onClick={sendWhatsapp}
      >
        You have ({cart.length}) items in your cart - Click to checkout
      </div>
    </div>
  )
}