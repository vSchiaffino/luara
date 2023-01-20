import React from 'react'
import { Button, ButtonProps } from './Button'

export interface AddToCartProps extends Omit<ButtonProps, 'variant'> {
  isOnCart: boolean
}

export const AddToCart = ({ isOnCart, ...props }: AddToCartProps) => {
  const label = isOnCart ? 'Remove from cart  ❌' : 'Add to cart ✅'
  const variant = isOnCart ? 'secondary' : 'outlined'
  return (
    <Button {...props} variant={variant}>
      {label}
    </Button>
  )
}
