import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_PROJECT_ID + '.firebaseapp.com',
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_PROJECT_ID + '.firebasestorage.app',
    messagingSenderId: '970367877570',
    appId: '1:970367877570:web:95f56dbf8a62035f6f565b',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);

setPersistence(FirebaseAuth, browserLocalPersistence);
