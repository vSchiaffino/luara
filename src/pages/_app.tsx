import { useState } from 'react'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { CartContext } from '@/cartContext'
import { IProduct } from '@/interfaces'
import { Nav } from '@/components/Nav'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<IProduct[]>([])
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Head>
        <title>Luara | Shop</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}
