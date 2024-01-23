'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAI9VVBNZ8r2Igkdn1XDODOcr9Ci3F94ws',
  authDomain: 'portfolio-411720.firebaseapp.com',
  projectId: 'portfolio-411720',
  storageBucket: 'portfolio-411720.appspot.com',
  messagingSenderId: '1082506373751',
  appId: '1:1082506373751:web:63b7c584265d69aade3472',
  measurementId: 'G-2D8TNNNPB7',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
