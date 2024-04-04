// login.js
class Login {
  constructor() {
    this.loginForm = document.getElementById("loginForm");
    this.errorMessage = document.getElementById("errorMessage");
    this.loginForm.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // You can replace this with your own logic for password verification
    if (username === "admin" && password === "admin123") {
      window.location.href = "railway reservation.html"; // Redirect to reservation page
    } else {
      this.errorMessage.innerText = "Invalid username or password.";
    }
  }
}

// Create an instance of the Login class when the page loads
window.addEventListener("DOMContentLoaded", () => {
  new Login();
});

// reservation.js
function bookTicket(trainNumber) {
  // Replace this with your booking logic
  alert("Ticket booked for Train Number: " + trainNumber);
}