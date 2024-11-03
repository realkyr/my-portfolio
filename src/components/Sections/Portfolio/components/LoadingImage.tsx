import { ThumbnailImageProps } from 'react-grid-gallery'
import { Skeleton } from '@/components/ui/Skeleton'

const LoadingImage = (props: ThumbnailImageProps) => {
  return (
    <div style={{ ...props.imageProps.style }}>
      <Skeleton className="w-full h-full !rounded-none" />
    </div>
  )
}

export default LoadingImage
