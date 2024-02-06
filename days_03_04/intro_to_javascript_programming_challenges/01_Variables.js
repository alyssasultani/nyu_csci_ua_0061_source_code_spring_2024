// Programming Challenge:
// Ask the user for their name
// Then have the website welcome the user using an <h1> tag
// Next, ask the user for a hex color code
// Use this code to create a div (give it a class of colorBox) on the screen with the correct color

let answer = prompt("Hello. What is your name?");

let color = prompt("Please give me a hex color code.");

document.write("<h1>Welcome, " + answer + "</h1>");


// ${} means taking the value of that variable
document.write(`<div class = "colorBox" style=background-color:#${color};"></div>`);

