let email = document.querySelector("#inputEmail");
email.setAttribute("value", "zcabpwc@ucl.ac.uk");
let password = document.querySelector("#inputPassword");
password.setAttribute("value", "password123456");

function User(email, password) {
    this.email = email;
    this.password = password;
    this.getEmail = function () {
        return this.email;
    };
    this.getPassword = function () {
        return this.password
    };
}

document.querySelector("#search").addEventListener("click", function () {
    alert("You searched for " + document.querySelector("#inputSearch").value);
});

document.querySelector("#signIn").addEventListener("click", function () {
    let signInUser = new User(email.value, password.value);
    console.log("User Email: " + signInUser.getEmail());
    console.log("User Password: " + signInUser.getPassword());
});

