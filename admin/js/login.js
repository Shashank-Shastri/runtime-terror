function checkUser() {
  getMessages();
  var user = firebase.auth().currentUser;
  if (user) {
    // No user is signed in.
    document.location.href="../index.html";

  } 
  else {
    // User is signed in.
    //document.body.style.display = 'block';
    getUser();
  }
}

function getUser() {
  firebase.database().ref("Admin/").once('value').then(function(snapshot){
    var user_name=snapshot.val().Name;
    document.getElementById("prName").innerHTML = user_name;
  });
}

 function logOut() {
    firebase.auth().signOut();
    alert("Successfully Logged out");
    document.location.href="../index.html";
  }

      function messages() {
        document.title="Peace | Messages";$('#messages').removeClass('hide');$('#dashBoard').addClass('hide');$('#navbarResponsive').removeClass('show');
      }
      function dash() {
        document.title="Peace | Admin";$('#dashBoard').removeClass('hide');$('#messages').addClass('hide');$('#navbarResponsive').removeClass('show');
      }

      function getMessages(){
        var num=0;
        firebase.database().ref("Messages/").once('value').then(function(snapshot){
          snapshot.forEach(function(childSnapshot) {
            ++num;
        var childData = childSnapshot.val();
          var firstName=childData.Name;
          var email=childData.Email;
          var subject=childData.Subject;
          var message=childData.Message;
          addRow(num,firstName,email,subject,message);
        console.log(firstName+" "+email+" "+subject+" "+message);
        

            //var list=
          });
        //  alert(firstName)
      });
      }
      function addRow(num,FLName, Email, Subject, Message) {

         var table = document.getElementById("meM");

         // Create an empty <tr> element and add it to the 1st position of the table:
         var row = table.insertRow();

         // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);

         // Add some text to the new cells::
         cell1.innerHTML = num;
         cell2.innerHTML = FLName;
         cell3.innerHTML = Email;
         cell4.innerHTML = Subject;
         cell5.innerHTML = Message;
      }
//bebalaltamash@gmail.com