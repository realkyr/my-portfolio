function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-stone-600 ${className}`}
      {...props}
    />
  )
}

export { Skeleton }
