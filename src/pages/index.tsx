import Products from '@/helpers/products'
import { IProduct } from '@/interfaces'
import { GetStaticProps } from 'next'
import { CartComponent } from '@/components/Cart'
import { ProductList } from '@/components/ProductList'

interface IndexProps {
  products: IProduct[]
}

export default function Index({ products }: IndexProps) {
  return (
    <>
      <main className="container mx-auto max-w-7xl mt-12">
        <ProductList products={products} />
      </main>
      <CartComponent />
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const REVALIDATE_TIME_IN_SECONDS = 30 // 30 seconds
  return {
    revalidate: REVALIDATE_TIME_IN_SECONDS,
    props: {
      products: await Products.list(),
    },
  }
}
