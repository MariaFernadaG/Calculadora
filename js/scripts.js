const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
 display.value="";
}

function calculate(){
 display.value = eval(display.value);
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

