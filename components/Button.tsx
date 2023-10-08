import React, { ReactNode } from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  as?: React.ElementType
}

const Button = ({ as = 'button', children, ...buttonProps }: ButtonProps) => {
  const Component = as

  return <Component {...buttonProps}>{children}</Component>
}

export default Button
