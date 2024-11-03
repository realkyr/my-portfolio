import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from '@firebase/firestore'
import { getFirebaseApp } from '@/lib/firebase'

export const getPortfolioRepo = async () => {
  const app = getFirebaseApp()
  if (!app) {
    throw new Error('Firebase app not initialized')
  }

  const db = getFirestore(app)

  const colRef = collection(db, 'portfolio')
  return await getDocs(query(colRef, orderBy('order')))
}
