const firebaseConfig = {
  apiKey: "AIzaSyBGHxkFfJL31JLd0gwiUIL0DKq19EWMq9E",
  authDomain: "jlsampleproject.firebaseapp.com",
  databaseURL: "https://jlsampleproject-default-rtdb.firebaseio.com",
  projectId: "jlsampleproject",
  storageBucket: "jlsampleproject.appspot.com",
  messagingSenderId: "479677523376",
  appId: "1:479677523376:web:88604ab46fb1db8cb32275",
  measurementId: "G-X0TB4CGCDR"

};
firebase.initializeApp(firebaseConfig);
var mainDB = firebase.firestore();
var database = firebase.database();

function nowOnPage() {
  var pathname = window.location.pathname;
  return pathname;
}

function signInNow() {
  var email = document.getElementById("useremail").value;
  var password = document.getElementById("password").value;
  if (email == "") {
    $("#useremail").focus();
    return;
  }
  if (password == "") {
    $("#password").focus();
    return;
  }
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      currentUser = firebase.auth().currentUser;
    })
    .catch(function (error) {
      alert("Please contact to admin");
    });
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {})
    .catch(function (error) {
      // An error happened.
    });
}
function resetPassword() {
  var email = document.getElementById("email").value;
  if (email == "") {
    alert("Please type email address");
    return;
  }
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Please check your inbox and reset Password.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Please contact to admin");
    });
}
firebase.auth().onAuthStateChanged((curUser) => {
  if (curUser != null) {
    if (nowOnPage().includes("login.html")) {
      window.location.href = "settings.html";
    }
  } else {
    console.log("No user");
    if (
      !nowOnPage().includes("login.html") &&
      !nowOnPage().includes("forgotPassword.html")
    ) {
      window.location.href = "login.html";
    }
  }
});

let images = {}; //it will contain uploaded images

function showPreview(event) {
  var id = event.target.id + "-preview";
  images[event.target.id] = event.target.files[0];
  console.log(id);
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById(id);
    preview.src = src;
    preview.style.display = "block";
  }
}
