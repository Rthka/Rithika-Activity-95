var firebaseConfig = {
  apiKey: "AIzaSyA_0NXTCsYJho-LUq4lhj2blE6l6lurWQw",
  authDomain: "rithika-activity-95.firebaseapp.com",
  databaseURL: "https://rithika-activity-95-default-rtdb.firebaseio.com",
  projectId: "rithika-activity-95",
  storageBucket: "rithika-activity-95.appspot.com",
  messagingSenderId: "13254944082",
  appId: "1:13254944082:web:6ba2a9a46bb9fc96b8868b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML=" Welcome - " + user_name;

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"add room"
}
);

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
