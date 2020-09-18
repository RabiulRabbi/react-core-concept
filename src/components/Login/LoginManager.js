// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeLoginFramework=()=>{
//     firebase.initializeApp(firebaseConfig);
// }

// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(googleProvider)
//         .then(res => {
//             const { displayName, email, photoURL } = res.user;
//             const signedInUser = {
//                 isSignedIn: true,
//                 name: displayName,
//                 email: email,
//                 photo: photoURL
//             }
//             return signedInUser;
//             //console.log(displayName,email,photoURL);
//         })
//         .catch(error => {
//             console.log(error);
//             console.log(error.message);
//         })
// }

// export const handleGoogleSignOut = () => {
//     return firebase.auth().signOut()
//         .then(res => {
//             const signedOutUser = {
//                 isSignedIn: false,
//                 name: '',
//                 email: '',
//                 photo: '',
//                 error: '',
//                 success: false
//             }
//             return (signedOutUser);
//         })
//         .catch(error => {

//         })
// }

// export const handleFbSignIn = () => {
//     const fbProvider = new firebase.auth.FacebookAuthProvider();
//     return firebase.auth().signInWithPopup(fbProvider).then(function (result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         return user;
//         console.log('fb user after sign in: ', user);            // ...
//     }).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     });
// }

// // export const createUserWithEmailAndPassword = () => {
// //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
// //                 .then(res => {
// //                     const newUserInfo = { ...user };
// //                     newUserInfo.error = '';
// //                     newUserInfo.success = true;
// //                     setUser(newUserInfo);
// //                     updateUserName(user.name);
// //                     console.log(user)
// //                 })
// //                 .catch(error => {
// //                     // Handle Errors here.
// //                     const newUserInfo = { ...user };
// //                     newUserInfo.error = error.message;
// //                     newUserInfo.success = false;
// //                     setUser(newUserInfo);
// //                 });
// // }

// // export const signInWithEmailAndPassword = () => {
// //     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
// //                 .then(res => {
// //                     const newUserInfo = { ...user };
// //                     newUserInfo.error = '';
// //                     newUserInfo.success = true;
// //                     setUser(newUserInfo);
// //                     setLoggedInUser(newUserInfo);
// //                     history.replace(from);
// //                     console.log('sign in user info', res.user);
// //                 })
// //                 .catch(error => {
// //                     // Handle Errors here.
// //                     const newUserInfo = { ...user };
// //                     newUserInfo.error = error.message;
// //                     newUserInfo.success = false;
// //                     setUser(newUserInfo);
// //                 });
// // }

// // const updateUserName = name => {
// //     const user = firebase.auth().currentUser;

// //     user.updateProfile({
// //         displayName: name,
// //     }).then(function () {
// //         console.log('userName Update successfully')
// //     }).catch(function (error) {
// //         console.log(error);
// //     });
// // }