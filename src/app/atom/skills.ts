import { atom } from 'jotai'
import { Category, Skill } from '@/types'

export const skillsAtom = atom<Category[]>([])

const getSkillsMap = (skills: Category[]) => {
  return skills.reduce(
    (acc, category) => {
      category.skills.forEach((skill) => {
        acc[skill.key] = skill
      })

      return acc
    },
    {} as Record<string, Skill>
  )
}

export const skillsMapAtom = atom((get) => getSkillsMap(get(skillsAtom)))
