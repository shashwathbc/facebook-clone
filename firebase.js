import firebase, { firestore } from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBYsid4n1lfKODcIh6Z-1Lu-siccXK5cuU",
	authDomain: "facebook-clone-8cc32.firebaseapp.com",
	projectId: "facebook-clone-8cc32",
	storageBucket: "facebook-clone-8cc32.appspot.com",
	messagingSenderId: "698330806881",
	appId: "1:698330806881:web:70f6c7426140f689578820",
	measurementId: "G-63XJSZNS36"
      };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;