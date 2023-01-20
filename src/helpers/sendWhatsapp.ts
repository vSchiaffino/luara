import { IProduct } from '@/interfaces'
import { parseCurrency } from './currency'

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER

export const sendWhatsapp = (cart: IProduct[]) => {
  const message = cart
    .map((product) => `* ${product.title} - ${parseCurrency(product.price)}`)
    .join('\n')
    .concat(
      '\n\nTotal: ' +
        parseCurrency(cart.reduce((acc, product) => acc + product.price, 0))
    )

  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`)
}
