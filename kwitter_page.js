//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
