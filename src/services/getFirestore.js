import firebase from "firebase";
import 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCa28FsV_QSPBJFlGc2QWTw_cY_TBDWhW0",
    authDomain: "torre-oscura.firebaseapp.com",
    projectId: "torre-oscura",
    storageBucket: "torre-oscura.appspot.com",
    messagingSenderId: "498497487123",
    appId: "1:498497487123:web:5264ff560b56116856dae6"
  };

  const app = firebase.initializeApp(firebaseConfig)


export default function getFirestore(){
    return firebase.firestore(app)
}