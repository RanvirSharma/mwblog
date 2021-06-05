var firebaseConfig = {
      apiKey: "AIzaSyDZtGj4jHWPbx_fX5KdVXXj5doD9YpqJyg",
      authDomain: "kwitter-44283.firebaseapp.com",
      databaseURL: "https://kwitter-44283-default-rtdb.firebaseio.com",
      projectId: "kwitter-44283",
      storageBucket: "kwitter-44283.appspot.com",
      messagingSenderId: "614729063628",
      appId: "1:614729063628:web:c6bd18499b12f349567669"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name.innerHTML")="welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
console.log("room name-" +Room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
}); }); } getData();
      //End code
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
            
      }