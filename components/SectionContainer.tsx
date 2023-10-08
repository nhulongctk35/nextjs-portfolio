import React, { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLSelectElement> {}

export default function SectionContainer({ children, ...sectionProps }: Props) {
  return (
    <section className="mx-auto px-6" {...sectionProps}>
      {children}
    </section>
  )
}
