import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDw4DUmcz4yKpQNBUaPWEMCTopDcB3AcLQ",
  authDomain: "quotemaster-bcc91.firebaseapp.com",
  databaseURL: "https://quotemaster-bcc91.firebaseio.com",
  projectId: "quotemaster-bcc91",
  storageBucket: "quotemaster-bcc91.appspot.com",
  messagingSenderId: "945504055835"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
