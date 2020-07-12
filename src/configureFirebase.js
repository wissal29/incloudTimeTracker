import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyBziwzYbVgJ8U9vRXFIncyer26AEleDGHw",
    authDomain: "timetracker-58a2f.firebaseapp.com",
    databaseURL: "https://timetracker-58a2f.firebaseio.com",
    storageBucket: "timetracker-58a2f.appspot.com",
    messagingSenderId: "88519765378"
}

// const config = {
//     apiKey:"AIzaSyBpUYUnBqPEeUIkaPy4Rg48e_gAvBBMB8w",
//     authDomain:"incloud-timetracker-app.firebaseapp.com",
//     databaseURL:"https://incloud-timetracker-app.firebaseio.com",
//     storageBucket:"incloud-timetracker-app.appspot.com",
//     messagingSenderId:"525981210032"
// }


firebase.initializeApp(config)

export default firebase

