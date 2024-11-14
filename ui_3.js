// still kinda not finished, missing close and open buttons
// Create the UI container div
var ui = document.createElement("div");
ui.style.width = "500px";
ui.style.height = "300px";
ui.style.zIndex = "9999";
ui.style.backgroundColor = "black";
ui.style.borderWidth = "3px";
ui.style.borderColor = "gray";
ui.style.position = "fixed";
ui.style.top = "10px";  // Fixed the missing "px"
ui.style.left = "10px"; // Fixed the missing "px"
ui.style.borderRadius = "5px";

// Create the heading inside the container
var h2 = document.createElement("h2");
h2.style.fontFamily = "Helvetica, Arial, sans-serif";
h2.style.color = "white";
h2.innerHTML = "  UNBLOCK3R UI 2.0";
h2.style.fontSize = "30px";
ui.appendChild(h2);

// Create the site input
var input = document.createElement("input");
input.id = "url";
input.style.width = "300px";
input.style.height = "30px";
input.style.backgroundColor = "white";
input.style.color = "black";
input.placeholder = "Enter a URL to open (include https://)!";
input.style.borderRadius = "10px";
ui.appendChild(input);

// Create the button inside the container
var btn = document.createElement("button");
btn.textContent = "Open Site!";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "white";
btn.style.width = "100px";
btn.style.height = "30px";

// Append the button to the UI container
ui.appendChild(btn);

// Create a text break
var br2 = document.createElement("br");
ui.appendChild(br2);

// Create a text break
var br3 = document.createElement("br");
ui.appendChild(br3);

// Create a link to the GitHub
var a = document.createElement("a");
a.setAttribute("href", "https://github.com/schoolexploitkid/UNBLOCK3R");
a.textContent = "Made by schoolexploitkid, Go to the Github repository!";
a.style.color = "white";
a.style.fontSize = "18px";
ui.appendChild(a);

// Append the UI container to the body of the page
document.body.appendChild(ui);

// Set the string
var string1 = "njk41263kj263j263l6321k2jn632lkj621kj3n6k621632lk632lkj6226kj6322lk62lkn3n6k6631l63321lk63";

// Set the button's click event to call fetchURL with the input value URL
btn.onclick = function() {
  var url = input.value.trim(); // Get the URL from the input field and trim any extra spaces
  if (url.startsWith("https://") || url.startsWith("http://")) {
    window.open(url + "#" + string1.repeat(16384));
  } else {
    alert('Please enter a valid URL.');
  }
};
