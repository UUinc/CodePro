//input
const login_email = document.getElementById("loginInputEmail");
const login_password = document.getElementById("loginInputPassword");
//submit
const login_btn = document.querySelector("#loginBtn");
//help
const login_emailHelp = document.getElementById("loginEmailHelp");
const login_passwordHelp = document.getElementById("loginPasswordHelp");

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
        return true;
    }

    return false;
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
        return true;
    }

    return false;
}

login_btn.addEventListener("click", (e) => {
    e.preventDefault();

    //check all validation
    if (LoginEmailValidation() && LoginPasswordValidation) {
        const user = FindUser(login_email.value);
        if (user.password === login_password.value) {
            connected = true;
            document.location = "index.html";
            return;
        }
        login_passwordHelp.innerText =
            "Sorry, your password was incorrect. Please double-check your password.";
    }
});
