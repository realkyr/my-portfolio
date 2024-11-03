import { Skill } from '@/types/skills'

export interface Link {
  name: string
  url: string
}

export type Tags = string

export interface Portfolio {
  image: string
  name: string
  description: string
  tags: Tags[]
  link: Link[]
}

export interface PortfolioJoinSkill extends Omit<Portfolio, 'tags'> {
  tags: Skill[]
}
