// Create the UI container div
var ui = document.createElement("div");
ui.style.width = "400px";
ui.style.height = "200px";
ui.style.zIndex = "9999";  // Reduced zIndex for better readability
ui.style.backgroundColor = "black";
ui.style.borderWidth = "3px";
ui.style.borderColor = "gray";
ui.style.position = "fixed";
ui.style.top = "0";
ui.style.left = "0";

//Create the heading inside the container
var h2 = document.createElement("h2");
h2.style.fontFamily = "helvetica";
h2.style.color = "white";
h2.innerHTML = "UNBLOCK3R UI 2.0";
ui.appendChild(h2);

// Create the button inside the container
var btn = document.createElement("button");
btn.textContent = "Open Site!";  // Correct property for setting text
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "white";
btn.style.width = "100px";
btn.style.height = "30px";

// Create a link to the github
var link = document.createElement("a");
link.setAttribute("href", "https://github.com/schoolexploitkid/UNBLOCK3R");
a.textContent = "Go to the Github repository";
a.style.backgroundColor = "white";
a.style.fontSize = "18px";

// Append the button to the UI container
ui.appendChild(btn);

// Append the UI container to the body of the page
document.body.appendChild(ui);

// Define fetchURL function to fetch and evaluate the JavaScript
function fetchURL(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();  // Get the content of the JS file as text
    })
    .then(jsCode => {
      // Evaluate the fetched JS code in the current page
      eval(jsCode);
    })
    .catch(error => {
      console.error('There was a problem fetching or evaluating the script:', error);
    });
}

// Set the button's click event to call fetchURL with the desired URL
btn.onclick = function() {
  fetchURL('https://raw.githubusercontent.com/schoolexploitkid/UNBLOCK3R/refs/heads/main/index.js');
};
