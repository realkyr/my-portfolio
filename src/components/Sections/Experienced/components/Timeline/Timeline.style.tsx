import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}
// Card.js
export function Card({ children, className = '' }: Props) {
  return (
    <div className={`bg-stone-800 rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  )
}

// CardHeader.js
export function CardHeader({ children, className = '' }: Props) {
  return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>
}

// CardTitle.js
export function CardTitle({ children, className = '' }: Props) {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
}

// CardContent.js
export function CardContent({ children, className = '' }: Props) {
  return <div className={className}>{children}</div>
}
