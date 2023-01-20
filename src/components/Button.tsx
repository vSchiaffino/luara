import React, { PropsWithChildren } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'secondary'
}

export const Button = ({
  variant,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const variantClasses = {
    outlined: 'text-indigo-700 border border-indigo-500 hover:bg-indigo-200',
    secondary: 'border border-rose-300 text-rose-400 font-semibold',
  }
  const variantClass = variantClasses[variant]
  return (
    <button
      {...rest}
      className={
        'px-6 py-2 rounded-md mt-auto font-semibold transition-colors ' +
        variantClass +
        ' ' +
        className
      }
    >
      {children}
    </button>
  )
}
