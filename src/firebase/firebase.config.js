// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAj8vUxYxwsPduhMx9vBTqOYV1TEWa0mpM",
//   authDomain: "toy-marketplace-cc713.firebaseapp.com",
//   projectId: "toy-marketplace-cc713",
//   storageBucket: "toy-marketplace-cc713.appspot.com",
//   messagingSenderId: "281274421904",
//   appId: "1:281274421904:web:1b075700b246328b923e15"
// };
console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app