import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
var firebaseConfig = {
  apiKey: "AIzaSyBv-g1eysjTDVA51S9fBIMB9B_6p-sWNUQ",
  authDomain: "iot-meter-6d302.firebaseapp.com",
  databaseURL: "https://iot-meter-6d302-default-rtdb.firebaseio.com",
  projectId: "iot-meter-6d302",
  storageBucket: "iot-meter-6d302.appspot.com",
  messagingSenderId: "13464221140",
  appId: "1:13464221140:web:46ba2e9ef25374b940d241",
  measurementId: "G-YMN08PVTRK"
};
let query = window.location.search.substring(1).split("cn=")[1]
console.log(query, "yafec")
document.getElementById("st").innerHTML = query
const app = firebase.initializeApp(firebaseConfig);
const ad = app.database().ref(query)
let snapshot
ad.once("value", function (snap) {
  const msg = snap.val()
  const key = snap.key;
  // console.log(key)
  snapshot = msg
  console.log(msg.disCon, "esg")
  document.getElementById("val").innerHTML = msg.Kwh
  let powerData = msg.Set;
  if (powerData === 1) {
    document.getElementById("turnOn").checked = true;
  }
  else {
    document.getElementById("turnOff").checked = true;
  }

})

cap();

document.getElementById("checkOn").onclick = async function () {
  ad.set({
    ...snapshot,
    "Set": 1
  })
}
document.getElementById("checkOff").onclick = async function () {
  ad.set({
    ...snapshot,
    "Set": 0
  })
}

