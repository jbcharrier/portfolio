import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL9VXPSw0q7fXy6QGqMKUv5uAB63hGOzw",
  authDomain: "myportfolio-a315e.firebaseapp.com",
  projectId: "myportfolio-a315e",
  storageBucket: "myportfolio-a315e.appspot.com",
  messagingSenderId: "245747847520",
  appId: "1:245747847520:web:7eb14a30ace2eef4ba4e05",
  measurementId: "G-QNLSENEG3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
