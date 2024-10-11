const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const menuButton2 = document.querySelector('.hamburger2');
const mobileMenu2 = document.querySelector('.mobile-nav2');

menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    menuButton2.classList.toggle('is-active2');
    mobileMenu2.classList.toggle('is-active2');
});

function redirectToHomePage(){
    window.location.href = "index.html";
}

function validation(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var phonenumber = document.getElementById("phone");
    var agreement = document.getElementById("agreement");

    if(username.value.length < 5){
        alert("Username must at least 5 characters !");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("email must ends with @gmail.com!");
    }else if(!male.checked && !female.checked){
        alert("must choose your gender !");
    }else if(phonenumber.value.length !== 12 && isNaN(phonenumber)){
        alert("insert 12 digit number for phone number !");
    }else if(!agreement.checked){
        alert("agreement must be checked");
    }else{
        alert("success submit data");
        redirectToHomePage();
    }


}