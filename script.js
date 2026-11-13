let button = document.getElementById("colorButton");
button.addEventListener("click", function() {

    document.body.style.backgroundColor = "lightblue";

});
let currentHour = new Date().getHours();

let greeting = document.getElementById("greeting");

if (currentHour < 12) {
    greeting.textContent = "Good Morning!";
}
else if (currentHour < 18) {
    greeting.textContent = "Good Afternoon!";
}
else {
    greeting.textContent = "Good Evening!";
}
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let sum = number1 + number2;

    document.getElementById("result").textContent =
        "Result: " + sum;

});