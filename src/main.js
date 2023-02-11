// Firebase SDK's
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { createApp } from 'vue'
import cookies from 'vue-cookies'
import App from './App.vue'
import router from './router'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgcV_PPOEhQxos6e0AVEYjaQTSaGHzRPE",
    authDomain: "osmaldy-maldonado.firebaseapp.com",
    projectId: "osmaldy-maldonado",
    storageBucket: "osmaldy-maldonado.appspot.com",
    messagingSenderId: "449276038553",
    appId: "1:449276038553:web:013b7c978060e5be165708",
    measurementId: "G-KT9BQS02D9"
};

// Initialize Firebase
getAnalytics(initializeApp(firebaseConfig));

createApp(App)
.use(router)
.use(cookies)
.mount('#app')