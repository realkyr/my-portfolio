export interface Link {
  name: string
  url: string
}

export interface Tags {
  title: string
  value: string // this use to display the tag, which is weird
  key: string
}

export interface Portfolio {
  image: string
  name: string
  description: string
  tags: Tags[]
  link: Link[]
}
