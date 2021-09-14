function displayDetails() {
    var name = document.forms["ssd"]["name"].value;
    var email = document.forms["ssd"]["email"].value;
    var telephone = document.forms["ssd"]["tele"].value;

    var valid_name_letters = /^[a-zA-Z-'. ]+$/;
    var valid_email_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var valid_telephone_numbers = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (name == "") {
        alert("Enter your name!");
        return false;
    }
    else if (!(name.match(valid_name_letters))) {
        alert('Please Enter your Correct name!');
        return false;
    }
    if (email == "") {
        alert(" Enter your email address");
        return false;
    }
    else if (!(email.match(valid_email_letters))) {
        alert('Your Email is not valid!! Please Enter a valid email address');
        return false;
    }
    if (telephone == "") {
        alert(" Enter your phone number");
        return false;
    }
    else if (!(telephone.match(valid_telephone_numbers))) {
        alert('Your telephone number is  not valid!! Please Enter a valid  telephone number');
        return false;
    }

    else {

        document.getElementById("pp").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("ho").style.display = "block";
        document.getElementById("nex").style.display = "block";
        document.getElementById("rad").style.display = "block";
        document.getElementById("ppk").style.display = "none";

        document.getElementById("tre").style.display = "none";
        document.getElementById("reset").style.display = "block";


    }


}
function show() {
    document.getElementById("pp").style.display = "block";
    document.getElementById("display").style.display = "none";
    document.getElementById("rad").style.display = "none";
    document.getElementById("ho").style.display = "none";
    document.getElementById("nex").style.display = "none";
    document.getElementById("ppk").style.display = "block";
}
function displayDetail() {
    var subject = document.forms["ssd"]["subject"].value;
    if (subject == "") {
        alert("Add a subject!");
        return false;
    }
    else {
        document.getElementById("pp").style.display = "none";
        document.getElementById("display").style.display = "none";
        document.getElementById("ho").style.display = "none";
        document.getElementById("nex").style.display = "none";
        document.getElementById("rad").style.display = "none";
        document.getElementById("tre").style.display = "block";
        document.getElementById("ppk").style.display = "block";

    }

}