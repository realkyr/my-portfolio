import { getSkillsRepo } from '@/components/Sections/Skills/repositories'
import { Category } from '@/types'

export const getSkillsService = async (): Promise<Category[]> => {
  try {
    const querySnapshot = await getSkillsRepo()
    return querySnapshot.docs.map((doc) => doc.data() as Category)
  } catch (error) {
    console.error(error)
    return []
  }
}
