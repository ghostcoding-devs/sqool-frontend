export default {
  firebaseConfig : {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
  },
  backendUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/api/v1/',
  backend: {
    baseURL: process.env.VUE_APP_BACKEND_URL,
    apiVersion: process.env.VUE_APP_BACKEND_VERSION
  }
}
