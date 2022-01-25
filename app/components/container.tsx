import React from 'react'

type Props = {
    as?: React.ReactType
    children?: React.ReactNode
}

const Container:React.FC<Props> = ({ children, as = 'section' }) => {
  const Tag = as
  return (
    <Tag
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-gutter)',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
