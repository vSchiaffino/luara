import { Dispatch, SetStateAction, createContext } from 'react'
import { IProduct } from './interfaces'

export const CartContext = createContext<
  [IProduct[], Dispatch<SetStateAction<IProduct[]>>]
>([[], () => {}])
