import { getExperienceRepo } from '@/components/Sections/Experienced/repositories'

export const getExperienceService = async () => {
  try {
    const querySnapshot = await getExperienceRepo()
    return querySnapshot.docs.map((doc) => doc.data())
  } catch (error) {
    console.error(error)
  }
}
