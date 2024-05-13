let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let gender = document.getElementsByName("gender").value;
let email = document.getElementById("userEmail").value;
let birthDate = document.getElementById("birthDate").value;
let address = document.getElementById("address").value;

if (firstName == "" || lastName == "" || gender == "" || email == "" || birthDate == "" || address == "") {
    return false;
}