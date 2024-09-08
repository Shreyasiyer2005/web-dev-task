// Destination Suggestions
const destinations = [
    "Paris, France", 
    "Tokyo, Japan", 
    "New York, USA", 
    "Sydney, Australia", 
    "Cape Town, South Africa"
];

function suggestDestination() {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    document.getElementById("destinationResult").innerHTML = 
        `We suggest you visit: ${destinations[randomIndex]}!`;
}

// Hotel Booking Simulation
function bookHotel() {
    const hotelName = document.getElementById("hotelName").value;
    if (hotelName) {
        document.getElementById("bookingResult").innerHTML = 
            `Booking your stay at ${hotelName}...`;
        // Simulate booking process
        setTimeout(() => {
            document.getElementById("bookingResult").innerHTML = 
                `Hotel ${hotelName} booked successfully!`;
        }, 2000);
    } else {
        document.getElementById("bookingResult").innerHTML = 
            "Please enter a hotel name.";
    }
}

// Show Nearby Attractions on Map
function showAttractions() {
    document.getElementById("mapFrame").src = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509739!2d144.95373631566664!3d-37.81720944210506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a389a6886a0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1649222136905!5m2!1sen!2sau";
    document.getElementById("mapContainer").style.display = "block";
}
