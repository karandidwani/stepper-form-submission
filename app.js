var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var emailId = document.getElementById("exampleInputEmail1");
emailId.addEventListener("focusout", function () {
    if (emailId.value !== "") {
        document.getElementById("q1").style.backgroundColor = "green";
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
        document.getElementById("submit").disabled = true;
    }
});

var password = document.getElementById("exampleInputPassword1");
password.addEventListener("focusout", function () {
    if (password.value !== "") {
        document.getElementById("q2").style.backgroundColor = "green";
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("q2").style.backgroundColor = "red";
    }
});

var policy = document.getElementById("exampleCheck1");
policy.addEventListener("click", function () {
    if (policy.checked) {
        document.getElementById("q3").style.backgroundColor = "green";
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("q3").style.backgroundColor = "red";
        document.getElementById("submit").disabled = true;
    }
});

