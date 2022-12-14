import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_sPa5Vk1qufzQ8MzR7SOazNxpWq9cZkA",
  authDomain: "musical-cameras-app.firebaseapp.com",
  projectId: "musical-cameras-app",
  storageBucket: "musical-cameras-app.appspot.com",
  messagingSenderId: "912786872257",
  appId: "1:912786872257:web:f04203ae59af5627598140",
  measurementId: "G-E12EVM16CK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
