// firebase.js (FINAL CLEAN VERSION)

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCoIsyJcvPPOlXTXFcz7Y4vFu9sLq7MaA",
  authDomain: "ocean-hazard-app-ab83b.firebaseapp.com",
  projectId: "ocean-hazard-app-ab83b",
  storageBucket: "ocean-hazard-app-ab83b.firebasestorage.app",
  messagingSenderId: "451684920829",
  appId: "1:451684920829:web:b8577255d09ece04547d94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export everything properly
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;