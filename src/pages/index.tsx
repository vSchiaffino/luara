import Products from '@/helpers/products'
import { Product } from '@/interfaces'
import { GetStaticProps } from 'next'
import ShoppingBag from '../public/shopping-bag.svg'
import { AddToCart } from '@/components/AddToCart'
import { useState } from 'react'
import { Cart } from '@/components/Cart'
import { parseCurrency } from '@/helpers/currency'

interface IndexProps {
  products: Product[]
}

export default function Index({ products }: IndexProps) {
  const [cart, setCart] = useState<Product[]>([])
  const onClickCart = (product: Product) => {
    setCart(
      cart.includes(product)
        ? cart.filter((item) => item.id !== product.id)
        : cart.concat(product)
    )
  }
  return (
    <>
      <main className="container mx-auto max-w-7xl mt-12">
        <div className="grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
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
                <h2 className="text-xl font-bold text-indigo-900">
                  {product.title}
                </h2>
                <span>{parseCurrency(product.price)}</span>
              </div>

              <p className="text-indigo-900">{product.description}</p>
              <AddToCart
                isOnCart={cart.includes(product)}
                onClick={() => onClickCart(product)}
              />
            </article>
          ))}
        </div>
      </main>
      {Boolean(cart.length) && <Cart cart={cart} />}
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  return {
    props: {
      products: await Products.list(),
    },
  }
}
