import firebase from 'firebase'

// todo ==> move this key
const firebaseConfig = {
  apiKey: 'AIzaSyBVYVXFtl5DpOB0l2n3DzNERzls5qwk1KE',
  authDomain: 'coshare-np.firebaseapp.com',
  projectId: 'coshare-np',
  storageBucket: 'coshare-np.appspot.com',
  messagingSenderId: '125154793556',
  appId: '1:125154793556:web:432b9de25b3c60907c35c1'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
// export the db
export default firebaseApp.firestore()
