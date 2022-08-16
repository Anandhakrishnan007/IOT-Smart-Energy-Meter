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
// cap();

var stdNo = 0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(consumerNumber, login, sec, status) {
  try {
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    td1.innerHTML = ++stdNo;
    td2.innerHTML = `<a href="/datapage.html?cn=${consumerNumber}">${consumerNumber}</a>`;
    td3.innerHTML = login;
    td4.innerHTML = sec;
    td5.innerHTML = status;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
  } catch (error) {
    console.log(error)
  }

}

const app = firebase.initializeApp(firebaseConfig);
const ad = app.database().ref("Consumer's")
ad.on("value", function (snap) {
  const msg = snap.val()
  const key = snap.key;
  stdNo = 0;
  tbody.innerHTML = "";
  Object.keys(msg).forEach(k => {
    const data = msg[k]
    AddItemToTable(data["ConsumerNumber"], data["LastLogin"], data["Section"], data["Status"], )
  })
}
)


