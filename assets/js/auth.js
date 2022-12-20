//Sign up data
const signup_username = document.getElementById("signupInputUsername");
const signup_email = document.getElementById("signupInputEmail");
const signup_password = document.getElementById("signupInputPassword");
const signup_password2 = document.getElementById("signupInputPassword2");
//Log in data
const login_email = document.getElementById("loginInputEmail");
const login_password = document.getElementById("loginInputPassword");

function Signup($location) {
    const user = FindUser(signup_email.value);

    if (user !== null) {
        //show error message...
        //email already exist
        //empty fields
        return;
    }

    if (1 /*if all fields are not empty and correct*/) {
        //..add this data to db
        document.location = $location;
    }
}

function Login($location) {
    const user = FindUser(login_email.value);
    console.log(user);
    if (user === null) {
        alert("email does not exist please sign up");
        //show error message...
        return;
    }

    if (user.password === login_password.value) {
        document.location = $location;
        return;
    }
    alert("check your password!");
}

function FindUser(email) {
    for (let index in users) {
        if (users[index].email === email) return users[index];
    }
    return null;
}
