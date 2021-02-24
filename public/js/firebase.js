
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function contactForm() {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Subject = document.getElementById('subject').value;
    var Message = document.getElementById('messageForm').value;
    var data_to_save = { Name, Email, Subject, Message };
    const fb = firebase.database().ref('Messages/');
    fb.child(Name).set(data_to_save);
    alert(
        'Message Sent. Thanks ' +
            Name +
            ' for contacting. We will reply as soon as possible.'
    );
}

function getData() {
    var Name = document.getElementById('name').value;

    firebase
        .database()
        .ref('Messages/' + Name)
        .once('value')
        .then(function (snapshot) {
            var firstName = snapshot.val().Email;

            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                alert(childData);
            });
            alert(firstName);
        });
}
function getQuote() {
    var index = (126 * Math.random()) | 0;
    firebase
        .database()
        .ref('Motivational Quotes/' + index)
        .once('value')
        .then(function (snapshot) {
            var quote = snapshot.val().text;
            var author = snapshot.val().author;
            //console.log(quote+" "+author);
            document.getElementById('quote').innerHTML = quote;
            document.getElementById('author').innerHTML = author;
        });
}

function login() {
    var email = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    const btnLogIn = document.getElementById('btnlogin');
    const auth = firebase.auth();
    //const promise=auth.signInWithEmailAndPassword(email,pass);
    //if(promise.catch(e=> document.getElementById("login_failed").innerHTML = e.message))
    const promise = auth
        .signInWithEmailAndPassword(email, pass)
        .then(function (result) {
            console.log(result);
            document.getElementById('login_failed').innerHTML = '';
            window.location.pathname =
                'home/aiktc/Desktop/peace/admin/index.html';
        })
        .catch(
            (e) =>
                (document.getElementById('login_failed').innerHTML = e.message)
        );
}

function addQuotes() {
    var quote = document.getElementById('quote').value;
    var author = document.getElementById('author').value;
    var data_to_save = { quote, author };
    // console.log(quote+" "+author+" "+data_to_save);
    const fb = firebase
        .database()
        .ref('Motivational Quotes/')
        .once('value')
        .then(function (snapshot) {
            var quotes = snapshot.val();
            const count = Object.keys(quotes).length;
            updateQuote(count, data_to_save);
        });
}

function updateQuote(count, data_to_save) {
    const fb = firebase.database().ref('Motivational Quotes/');
    fb.child(count).set(data_to_save);
}

function uploadMusicLinks() {
    var musicLink = document.getElementById('music').value;
    const fb = firebase
        .database()
        .ref('Music/')
        .once('value')
        .then(function (snapshot) {
            var quotes = snapshot.val();
            const count = Object.keys(quotes).length;
            updateMusic(count, musicLink);
            alert('Succes');
        });
}

function updateMusic(count, musicLink) {
    const fb = firebase.database().ref('Music/');
    fb.child(count + 1).set(musicLink);
}

function uploadYoutubeLinks() {
    var Title = document.getElementById('title').value;
    var Link = document.getElementById('link').value;
    var count = document.getElementById('num').value;
    var data_to_save = { Title, Link };
    const fb = firebase.database().ref('Meditation Videos/');
    fb.child(count).set(data_to_save);
}
