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
        <meta
          name="description"
          content='Minimal "ecommerce" template with Google Sheets, NextJS SSG and React'
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}
