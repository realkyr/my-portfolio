import { getPortfolioRepo } from '@/components/Sections/Portfolio/repositories'
import { Portfolio } from '@/types/portfolio'

export const getPortfolioService = async (): Promise<Portfolio[]> => {
  try {
    const querySnapshot = await getPortfolioRepo()
    return querySnapshot.docs.map((doc) => doc.data() as Portfolio)
  } catch (error) {
    console.error(error)
    return []
  }
}
