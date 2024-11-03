import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from '@firebase/firestore'
import { getFirebaseApp } from '@/lib/firebase'

export const getSkillsRepo = async () => {
  const app = getFirebaseApp()
  if (!app) {
    throw new Error('Firebase app not initialized')
  }

  const db = getFirestore(app)

  const colRef = collection(db, 'skills')
  return await getDocs(query(colRef, orderBy('order')))
}
