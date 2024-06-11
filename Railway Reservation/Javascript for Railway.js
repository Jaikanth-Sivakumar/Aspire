function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
}

function closeLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === "Jaikanth" && password === "123") {
    localStorage.setItem('username', username);
    closeLoginForm();
    location.reload();
  } 
  else if (username === "admin" && password === "admin123") {
    window.location.href = "admin.html";
  } 
  else {
    alert('Invalid username or password');
  }
}


function clearUsername() {
  localStorage.removeItem('username');
}

window.onload = function() {
  clearUsername();
  var username = localStorage.getItem('username');
  if (username) {
    var loginBtn = document.getElementById('loginBtn');
    loginBtn.innerHTML = 'Welcome, ' + username;
    //loginBtn.disabled = true;
  }

};



document.getElementById("filterInput").addEventListener("input", function() {
  var filterValue = this.value.toLowerCase();
  var rows = document.getElementById("trainTable").getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var trainName = row.cells[1].textContent.toLowerCase();
    var departurePlace = row.cells[2].textContent.toLowerCase();
    var departureTime = row.cells[3].textContent.toLowerCase();
    var arrivalPlace = row.cells[4].textContent.toLowerCase();
    var arrivalTime = row.cells[5].textContent.toLowerCase();
    var seatType = row.cells[7].textContent.toLowerCase();
    
    if (trainName.indexOf(filterValue) > -1 || departurePlace.indexOf(filterValue) > -1 || departureTime.indexOf(filterValue) > -1 || arrivalPlace.indexOf(filterValue) > -1 || arrivalTime.indexOf(filterValue) > -1 || seatType.indexOf(filterValue) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});


function generateTicketNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

function generateSeatNumber() {
  return Math.floor(Math.random() * 10);
}

function generateTicketImage() {
  const ticketDetails = document.getElementById('ticketDetails');

  const canvas = document.createElement('canvas');
  canvas.width = ticketDetails.offsetWidth;
  canvas.height = ticketDetails.offsetHeight;
  const context = canvas.getContext('2d');

  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = '16px Arial'; 
  context.fillStyle = '#000'; 
  const ticketDetailsContent = ticketDetails.innerHTML;
  context.fillText(ticketDetailsContent, 10, 20); 

  const dataURL = canvas.toDataURL('image/png');

  const link = document.createElement('a');
  link.download = 'ticket.png';
  link.href = dataURL;
  link.click();
}

function closePopup() {
  document.getElementById('ticketPopup').style.display = 'none';
}

function bookTrain(button) {
  document.getElementById('bookTrainForm').style.display = 'block';
}

 function closeBookTrainForm() {
  document.getElementById('bookTrainForm').style.display = 'none';
}



function addPassengerFields() {
  var numSeats = document.getElementById('numSeats').value;
  var passengerDetails = document.getElementById('passengerDetails');

  if(numSeats<1){
    alert("Please enter minimum of 1 seat");
    closeBookTrainForm();
  }

  passengerDetails.innerHTML = '';

  for (var i = 0; i < numSeats; i++) {
    passengerDetails.innerHTML += `
      <h3>Passenger ${i + 1}</h3>
      <label for="passengerName${i}">Name:</label><br>
      <input type="text" id="passengerName${i}" name="passengerName${i}" required><br>
      <label for="passengerGender${i}">Gender:</label><br>
      <select id="passengerGender${i}" name="passengerGender${i}" required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br>
      <label for="passengerSeatType${i}">Seat Type:</label><br>
      <select id="passengerSeatType${i}" name="passengerSeatType${i}" required>
        <option value="Economy">Economy</option>
        <option value="First Class">First Class</option>
      </select><br><br>
      <button type="button" onclick="bookTicket()">Book Ticket</button>
    `;
  }
}


function bookTicket() {
    var numSeats = document.getElementById('numSeats').value;
    var ticketHTML = '<h2>Ticket Details</h2>';

    var ticketNumber = generateTicketNumber();
    var trainNumber = 12345;
    var trainName = "Indian Train";
    var departurePlace = "Salem";
    var departureTime = "08:00 AM";
    var arrivalPlace = "Chennai";
    var arrivalTime = "04:00 AM";
    var totalCost = numSeats * 50;

    ticketHTML += `
        <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
        <p><strong>Train Number:</strong> ${trainNumber}</p>
        <p><strong>Train Name:</strong> ${trainName}</p>
        <p><strong>Departure Place:</strong> ${departurePlace}</p>
        <p><strong>Departure Time:</strong> ${departureTime}</p>
        <p><strong>Arrival Place:</strong> ${arrivalPlace}</p>
        <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
        <p><strong>Total Cost:</strong> $${totalCost}</p>
        <hr>
    `;

  for (var i = 0; i < numSeats; i++) {
    var passengerName = document.getElementById('passengerName' + i).value;
    var passengerGender = document.getElementById('passengerGender' + i).value;
    var passengerSeatType = document.getElementById('passengerSeatType' + i).value;
    var SeatNumber ="A"+generateSeatNumber();

    ticketHTML += `
      <h3>Passenger ${i + 1}</h3>
      <p><strong>Name:</strong> ${passengerName}</p>
      <p><strong>Gender:</strong> ${passengerGender}</p>
      <p><strong>Seat Type:</strong> ${passengerSeatType}</p>
      <p><strong>Seat Number:</strong> ${SeatNumber}</p>
      <hr>
    `;
  }
  ticketHTML +='<button onclick="generateTicketImage()">Download Ticket</button>'
 
  document.getElementById('bookTrainForm').innerHTML = ticketHTML;
}














/**
  function showTicket(button) {
  const row = button.closest('tr');
  const cells = row.getElementsByTagName('td');

  const trainNumber = cells[0].textContent;
  const trainName = cells[1].textContent;
  const departurePlace = cells[2].textContent;
  const departureTime = cells[3].textContent;
  const arrivalPlace = cells[4].textContent;
  const arrivalTime = cells[5].textContent;
  const price = cells[6].textContent;
  const availableSeats = parseInt(cells[8].textContent);

  const name = prompt("Please enter your name:");
  const numTickets = parseInt(prompt("How many tickets do you want to book?"));
  const seatType = prompt("Please enter your preferred seat type (e.g., Economy, First Class):");

  if (name && numTickets && !isNaN(numTickets) && numTickets <= availableSeats && seatType) {
    const ticketNumber = generateTicketNumber();
    const totalPrice = parseFloat(price.replace('$', '')) * numTickets;
    const ticketHTML = `
      <h2>Ticket Details</h2>
      <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Train Number:</strong> ${trainNumber}</p>
      <p><strong>Train Name:</strong> ${trainName}</p>
      <p><strong>Departure Place:</strong> ${departurePlace}</p>
      <p><strong>Departure Time:</strong> ${departureTime}</p>
      <p><strong>Arrival Place:</strong> ${arrivalPlace}</p>
      <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Seat Type:</strong> ${seatType}</p>
      <p><strong>Number of Tickets:</strong> ${numTickets}</p>
      <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
    `;

    document.getElementById('ticketDetails').innerHTML = ticketHTML;
    document.getElementById('ticketPopup').style.display = 'block';
    
    // Focus on the ticket details in the popup
    document.getElementById('ticketDetails').focus();
  } else if (numTickets > availableSeats) {
    alert("Sorry, there are not enough available seats for your request.");
  } else {
    alert("Please enter valid information.");
  }
}
 */

//function bookTicket(trainNumber) {
//  alert("Ticket booked for Train Number: " + trainNumber);
//}