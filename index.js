function chat() {
alert("Hello");

var yourName = prompt("What is your name?");
alert("Hello  "+ yourName);

var food = prompt("what is your favorite food?");
alert("I like " + food + "too!");

var sharefood = confirm("Let's eat?");
if (sharefood == true){
    alert("Thank you!");
}
else {
    alert("See you next!");
}
}
function showLetter() {
    var letters = prompt("Type anything you want");
        alert("You have Written " + letters.length + " characters, you only have " + (150 - letters.length) + "remaining characters.");
}   