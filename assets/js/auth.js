//Sign up data
const signup_username = document.getElementById("signupInputUsername");
const signup_email = document.getElementById("signupInputEmail");
const signup_password = document.getElementById("signupInputPassword");
const signup_password2 = document.getElementById("signupInputPassword2");
const signup_usernameHelp = document.getElementById("signupUsernameHelp");
const signup_emailHelp = document.getElementById("signupEmailHelp");
const signup_passwordHelp = document.getElementById("signupPasswordHelp");
const signup_password2Help = document.getElementById("signupPassword2Help");
//Log in data
const login_email = document.getElementById("loginInputEmail");
const login_password = document.getElementById("loginInputPassword");
const login_emailHelp = document.getElementById("loginEmailHelp");
const login_passwordHelp = document.getElementById("loginPasswordHelp");

function Signup($location) {
    const user = FindUser(signup_email.value);

    if (user !== null) {
        ClearSignup();
        //show error message...
        //email already exist
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
        login_emailHelp.innerText = "email does not exist please sign up";
        return;
    }

    if (user.password === login_password.value) {
        ClearLogin();
        document.location = $location;
        return;
    }
    login_passwordHelp.innerText = "check your password!";
}
//Clear
function ClearLogin() {
    login_email.value = "";
    login_password.value = "";
    ClearLoginHelp();
}
function ClearLoginHelp() {
    login_emailHelp.innerText = "";
    login_passwordHelp.innerText = "";
}
function ClearSignup() {
    signup_username.value = "";
    signup_email.value = "";
    signup_password.value = "";
    signup_password2.value = "";
    ClearSignupHelp();
}
function ClearSignupHelp() {
    signup_usernameHelp.innerText = "";
    signup_emailHelp.innerText = "";
    signup_passwordHelp.innerText = "";
    signup_password2Help.innerText = "";
}
//Tools
function FindUser(email) {
    for (let index in users) {
        if (users[index].email === email) return users[index];
    }
    return null;
}
