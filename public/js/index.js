(function () {
    var email = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    const btnLogIn = document.getElementById('btnlogin');
    const auth = firebase.auth();

    btnLogIn.addEventListener('click', (e) => {
        const promise = auth.signWithEmailAndPassword(email, pass);
        promise.catch((e) => Console.log(e.message));
    });

    firebase.auth().onAuthStateChanged((firebaseuser) => {
        if (firebaseuser) {
            Console.log(firebaseuser);
            btnLogOut.classList.remove('hide');
        } else {
            Console.log('Not Logged In');
            btnLogOut.classList.add('hide');
        }
    });

    btnLogOut.addEventListener('click', (e) => {
        firebase.auth().signOut();
    });
})();
