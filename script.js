
var factButton = document.getElementById('factButton');

factButton.addEventListener('click', getCatFactsFromAPI);


var factDisplay = document.getElementById('factDisplay');

var loadingSpinner = document.getElementById('loading-spinner');

function getCatFactsFromAPI() {
  factButton.disabled = true; // Disable the button

  loadingSpinner.style.display = "block"; // Show the loading spinner
  factDisplay.style.display = "none"; // Hide the fact display
  document.getElementById('factDisplay').scrollIntoView({ behavior: 'smooth' });

  // wait for 1 second before fetching the data
  setTimeout(function () {

    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {

        // Hide the loading spinner
        loadingSpinner.style.display = "none";
        factDisplay.style.display = "inline-block";

        // Set the innerText of factDisplay to the fact text
        factDisplay.innerText = data.fact;

        factButton.disabled = false; // Enable the button again

        document.getElementById('factButton').addEventListener('click', function() {
      
        });
    });



  }, 1000);

 
}

getCatFactsFromAPI()