import {doc, getDoc, getFirestore} from "@firebase/firestore";
import {getFirebaseApp} from "@/lib/firebase";

export const getProfileRepo = async () => {
  const app = getFirebaseApp()
  if (!app) {
    throw new Error('Firebase app not initialized')
  }

  const db = getFirestore(app)

  const docRef = doc(db, 'informations', 'LqkBrXr2MUXx84Gachfz')
  return await getDoc(docRef)
}