const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

exports.getAllPosts = functions.https.onRequest(async (request, response) => {
  const snapshot = await firestore.collection('posts').get();
  const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  
  response.json({ posts });
});