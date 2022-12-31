import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyBMs-nxq9jSjJSwT-NaXrrOPReEc0To8tA',
    authDomain: 'onlinefooddelivery-e5e03.firebaseapp.com',
    projectId: 'onlinefooddelivery-e5e03',
    storageBucket: 'onlinefooddelivery-e5e03.appspot.com',
    messagingSenderId: '715881305662',
    appId: '1:715881305662:web:bb53fd1c5626006127636f',
    measurementId: 'G-FCKVSTJ1C4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};