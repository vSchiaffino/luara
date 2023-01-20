import { Product } from '@/interfaces'
import axios from 'axios'
import papa from 'papaparse'

export default class Products {
  static async list() {
    const response = await axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTj_BVYqprfKVQFKs6H_Tv5o8h2fI2g0cqQiwJLmTbQNp4lJE-7ipknc53_A0vr9PxZngugvki5wwPB/pub?output=csv'
    )
    const csv = response.data
    const { data, errors } = papa.parse(csv, {
      header: true,
    })
    if (errors.length) throw new Error(errors.map((e) => e.message).join('\n'))
    const products: Product[] = data.map((product: any) => ({
      ...product,
      price: Number(product.price),
    }))
    return products
  }
}
