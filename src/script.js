// JavaScript for Welcome Message (only on index page)
document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = true; // Simulate condition for the top (index) page
  if (isHomePage) {
    alert("Welcome to Starbucks! Start your coffee journey with us.");
  }
});

// JavaScript for Interactive Coffee Button
const coffeeButton = document.getElementById("favorite-coffee-button");
const coffeeResponse = document.getElementById("coffee-response");

coffeeButton.addEventListener("click", () => {
  const userFavorite = prompt("What's your favorite coffee?");
  if (userFavorite) {
    coffeeResponse.textContent = `Wow, ${userFavorite} sounds delicious!`;
    coffeeResponse.style.color = "#006241"; // Starbucks Green
    coffeeResponse.style.fontWeight = "bold";
  } else {
    coffeeResponse.textContent = "Please tell us your favorite coffee!";
    coffeeResponse.style.color = "red";
  }
});
