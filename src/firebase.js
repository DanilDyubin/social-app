import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCeo2J-ftjA-DKc4Th_2BnMQuQy3VMMAv0',
  authDomain: 'socialapp-e45c4.firebaseapp.com',
  projectId: 'socialapp-e45c4',
  storageBucket: 'socialapp-e45c4.appspot.com',
  messagingSenderId: '176241754225',
  appId: '1:176241754225:web:289c80bd233d74e09e5bd0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
