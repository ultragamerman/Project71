import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyD3cg36NjKRPXUtN2zru3g_qd7MjoWq7oQ",
  authDomain: "complaint-forum-4cbae.firebaseapp.com",
  projectId: "complaint-forum-4cbae",
  storageBucket: "complaint-forum-4cbae.appspot.com",
  messagingSenderId: "752197267095",
  appId: "1:752197267095:web:34ce4031d31f903f3883d2"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

