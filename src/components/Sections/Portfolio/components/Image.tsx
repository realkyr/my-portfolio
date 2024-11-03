import { ImageExtended, ThumbnailImageProps } from 'react-grid-gallery'
import NextImage from 'next/image'
import { Skill } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { Show } from '@/components/ui/Show'
import { HOSTNAME } from '@/lib/drive'

const Image = (props: ThumbnailImageProps) => {
  const item = props.item as ImageExtended & { customTags: Skill[] }
  return (
    <>
      <div className="absolute left-[2px] bottom-[2px]">
        {item.customTags?.map((tag) => (
          <Badge key={tag.key} className="bg-stone-700 text-snow mr-2 z-10">
            <Show when={!!tag.image}>
              <Show.Then>
                <NextImage
                  width={15}
                  height={15}
                  src={HOSTNAME + tag.image}
                  alt={tag.name}
                />
              </Show.Then>

              <Show.Else>{tag.name}</Show.Else>
            </Show>
          </Badge>
        ))}
      </div>
      <NextImage
        width={props.imageProps.style.width as number}
        height={props.imageProps.style.height as number}
        src={props.imageProps.src}
        alt={props.imageProps.alt}
        style={{ ...props.imageProps.style }}
      />
    </>
  )
}

export default Image
