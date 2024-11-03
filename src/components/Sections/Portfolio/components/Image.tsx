import { ThumbnailImageProps } from 'react-grid-gallery'
import NextImage from 'next/image'

const Image = (props: ThumbnailImageProps) => {
  return (
    <NextImage
      width={props.imageProps.style.width as number}
      height={props.imageProps.style.height as number}
      src={props.imageProps.src}
      alt={props.imageProps.alt}
      style={{ ...props.imageProps.style }}
    />
  )
}

export default Image
