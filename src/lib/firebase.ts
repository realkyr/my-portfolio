import { initializeApp } from 'firebase/app'
import 'firebase/analytics'
import { getAnalytics } from '@firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

export const getFirebaseApp = () => {
  try {
    // check if this is on client
    if (typeof window !== 'undefined') {
      const app = initializeApp(firebaseConfig)
      getAnalytics(app)

      return app
    }
  } catch (_err) {
    const err = _err as Error
    if (!/already exists/.test(err.message)) {
      console.error('Client Firebase initialization error', err.stack)
    }
  }
}
