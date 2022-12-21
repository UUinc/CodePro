//-----Sign up-----
//input
const signup_username = document.getElementById("signupInputUsername");
const signup_email = document.getElementById("signupInputEmail");
const signup_password = document.getElementById("signupInputPassword");
const signup_password2 = document.getElementById("signupInputPassword2");
//submit
const signup_btn = document.querySelector("#signupBtn");
//help
const signup_usernameHelp = document.getElementById("signupUsernameHelp");
const signup_emailHelp = document.getElementById("signupEmailHelp");
const signup_passwordHelp = document.getElementById("signupPasswordHelp");
const signup_password2Help = document.getElementById("signupPassword2Help");
//design
//..
//-----Log in-----
//input
const login_email = document.getElementById("loginInputEmail");
const login_password = document.getElementById("loginInputPassword");
//submit
const login_btn = document.querySelector("#loginBtn");
//help
const login_emailHelp = document.getElementById("loginEmailHelp");
const login_passwordHelp = document.getElementById("loginPasswordHelp");
//design
//..

//Functions
signup_btn.addEventListener("click", (e) => {
    e.preventDefault();

    //check all validation
    if (1) {
        //add to db
        document.location = $location;
    }
});

login_btn.addEventListener("click", (e) => {
    e.preventDefault();

    //check all validation
    var EmailValidation = login_email.style.borderColor === "#34cc34";
    var PasswordValidation = login_password.style.borderColor === "#34cc34";
    if (EmailValidation && PasswordValidation) {
        document.location = $location;
    }
});

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
//----Sign up----
//Username validation
function UsernameValidation() {
    let username = signup_username.value;
    signup_username.style.borderColor = "red";
    if (username === "") {
        signup_usernameHelp.innerText = "Username cannot be blank";
    } else if (username.length < 3 || username.length > 25) {
        signup_usernameHelp.innerText =
            "Username must be between 3 and 25 characters";
    } else {
        signup_usernameHelp.innerText = "";
        signup_username.style.borderColor = "#34cc34";
    }
}
//Email validation
function EmailValidation() {
    let email = signup_email.value;
    var regex =
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    signup_email.style.borderColor = "red";

    if (email === "") {
        signup_emailHelp.innerText = "Email cannot be blank";
    } else if (!regex.test(email)) {
        signup_emailHelp.innerText = "Email is not valid";
    } else {
        signup_emailHelp.innerText = "";
        signup_email.style.borderColor = "#34cc34";
    }
}
//Password validation
function PasswordValidation() {
    let password = signup_password.value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(.{8,})$/;
    signup_password.style.borderColor = "red";

    if (password === "") {
        signup_passwordHelp.innerText = "Password cannot be blank";
    } else if (!regex.test(password)) {
        signup_passwordHelp.innerText =
            "Password must has at least 8 characters that include at least 1 lowercase character. 1 uppercase character, 1 number and 1 special character (!@#$%^&*)";
    } else {
        signup_passwordHelp.innerText = "";
        signup_password.style.borderColor = "#34cc34";
        PasswordConfirmationValidation();
    }
}
//Password confirmation validation
function PasswordConfirmationValidation() {
    signup_password2.style.borderColor = "red";

    if (signup_password2.value === "") {
        signup_password2Help.innerText = "";
    } else if (signup_password.value !== signup_password2.value) {
        signup_password2Help.innerText = "The password does not match";
    } else {
        signup_password2Help.innerText = "";
        signup_password2.style.borderColor = "#34cc34";
    }
}

//----Login-----
//Email validation
function LoginEmailValidation() {
    let email = login_email.value;
    var regex =
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    login_email.style.borderColor = "red";

    if (email === "") {
        login_emailHelp.innerText = "Email cannot be blank";
    } else if (!regex.test(email)) {
        login_emailHelp.innerText = "Email is not valid";
    } else {
        login_emailHelp.innerText = "";
        login_email.style.borderColor = "#34cc34";
    }
}
//Password validation
function LoginPasswordValidation() {
    let password = login_password.value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(.{8,})$/;
    login_password.style.borderColor = "red";

    if (password === "") {
        login_passwordHelp.innerText = "Password cannot be blank";
    } else if (!regex.test(password)) {
        login_passwordHelp.innerText =
            "Password must has at least 8 characters that include at least 1 lowercase character. 1 uppercase character, 1 number and 1 special character (!@#$%^&*)";
    } else {
        login_passwordHelp.innerText = "";
        login_password.style.borderColor = "#34cc34";
    }
}
