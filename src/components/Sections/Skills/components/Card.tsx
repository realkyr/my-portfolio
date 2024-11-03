// CardComponents.tsx
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-stone-800 rounded-lg shadow-lg p-4 ${className}`}>
    {children}
  </div>
)
export const CardContent = ({ children, className = '' }: CardProps) => (
  <div className={className}>{children}</div>
)
export const CardHeader = ({ children, className = '' }: CardProps) => (
  <div className={`pb-2 mb-4 ${className}`}>{children}</div>
)
export const CardTitle = ({ children, className = '' }: CardProps) => (
  <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
)
