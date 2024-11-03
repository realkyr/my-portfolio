export interface Skill {
  name: string
  image: string
  key: string
}

export interface Category {
  category: string
  skills: Skill[]
}
