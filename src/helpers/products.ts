import { IProduct } from '@/interfaces'
import axios from 'axios'
import papa from 'papaparse'

const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL || ''

export default class Products {
  static async list() {
    if (!SHEET_URL)
      throw new Error('Please config SHEET_URL in .env.local, see readme.md')

    const response = await axios.get(SHEET_URL)
    const csv = response.data
    const { data, errors } = papa.parse(csv, {
      header: true,
    })
    if (errors.length) throw new Error(errors.map((e) => e.message).join('\n'))
    const products: IProduct[] = data.map((product: any) => ({
      ...product,
      price: Number(product.price),
    }))
    return products
  }
}
