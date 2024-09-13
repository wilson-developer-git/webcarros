
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfVS58I6spJLVZDDublLj1jolLySoY2iM",
  authDomain: "webcarros-a6a64.firebaseapp.com",
  projectId: "webcarros-a6a64",
  storageBucket: "webcarros-a6a64.appspot.com",
  messagingSenderId: "406061847809",
  appId: "1:406061847809:web:4094a7f87d00e58d593700",
  measurementId: "G-Q13217LC92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };