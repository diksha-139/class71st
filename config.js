import firebase from "firebase";
require("firebase/firestore");


var firebaseConfig = {
  apiKey: "AIzaSyAWTVGbyVXowMYknzx31cpdb6wSLacfg5E",
  authDomain: "elearning-e169b.firebaseapp.com",
  projectId: "elearning-e169b",
  storageBucket: "elearning-e169b.appspot.com",
  messagingSenderId: "789813279304",
  appId: "1:789813279304:web:9b744f14fc7577849c767d"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase.firestore;
