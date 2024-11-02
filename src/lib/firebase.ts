import { initializeApp } from 'firebase/app'
import 'firebase/analytics'
import { getAnalytics } from '@firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBulSl662TPk6JZOeQc_sKl2cOcnzVkLeQ',
  authDomain: 'yora-resume.firebaseapp.com',
  projectId: 'yora-resume',
  storageBucket: 'yora-resume.appspot.com',
  messagingSenderId: '463287187696',
  appId: '1:463287187696:web:9648266ee73ff94c9faa35',
  measurementId: 'G-9EXPEBJG0Y',
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
