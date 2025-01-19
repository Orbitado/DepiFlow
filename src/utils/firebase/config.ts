import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyB_dTAcR8suGO9c0WMfVJvMGAO86OcdX6Y',
    authDomain: 'depiflow.firebaseapp.com',
    projectId: 'depiflow',
    storageBucket: 'depiflow.firebasestorage.app',
    messagingSenderId: '970367877570',
    appId: '1:970367877570:web:95f56dbf8a62035f6f565b',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const CloudFirestore = getFirestore(FirebaseApp);
