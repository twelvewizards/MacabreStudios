function adjustNavDisplay() {
    if ($(window).width() > 767) {
        $('#top-nav, #top-logo').show();
        $('#black-rectangle, #mobile-nav-icon').hide();
    } else {
        $('#top-nav').hide();
        $('#black-rectangle, #mobile-nav-icon, #top-logo').show();
    }
}

$(document).ready(function() {
    // Display footer immediately without fading
    $('#footer-section').show();

    // Adjust the navigation display on page load
    adjustNavDisplay();

    // Adjust the navigation display on window resize
    $(window).resize(adjustNavDisplay);

    // Mobile navigation overlay toggle
    $('#mobile-nav-icon').click(function() {
        if ($('#mobile-nav-overlay').css('right') === '0px') {
            $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
        } else {
            $('#mobile-nav-overlay').animate({ right: '0' }, 300);  // Show
        }
    });

    // Close Mobile navigation overlay when X is clicked
    $('#close-nav-icon').click(function() {
        $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
    });
});

// Handle the page visibility change event
function handleVisibilityChange() {
    if (!document.hidden) {
        adjustNavDisplay();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);


function submitForm() {
    // Prevent the default form submission
    event.preventDefault();

    // Access the form data
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Create an object to store the data
    var formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message

        
    };

    // Convert the object into a string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    
    // Show an alert to the user
    alert('Your message has been sent. Thank you for contacting us!');

    // Clear the form fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
function submitForm(event) {
    // Prevent the default form submission if the event object is provided
    if (event) {
        event.preventDefault();
    }

    // Access the form data
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');

    // Create an object to store the data
    var formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    };

    // Convert the object into a string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Clear the form fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';

    // Disable the form fields
    firstName.disabled = true;
    lastName.disabled = true;
    email.disabled = true;
    phone.disabled = true;
    message.disabled = true;

    // Get the send button and update its properties
    var sendButton = document.getElementById('sendButton');
    sendButton.value = 'Sent ✓';
    sendButton.disabled = true;
    sendButton.classList.add('sent-button');
}



function loadFormData() {
    // Retrieve the stored data from local storage
    var storedData = localStorage.getItem('formData');

    // If there is data, parse it back into an object
    if (storedData) {
        var formData = JSON.parse(storedData);

        // Do something with the data, like logging it to the console
        console.log("Retrieved Form Data: ", formData);
    }
}

// Call loadFormData on page load
document.addEventListener('DOMContentLoaded', loadFormData);



// Initialize and set up the Leaflet map
function setupLeafletMap() {
    // New coordinates for the location
    var latitude = -39.034185098820906;
    var longitude = 177.41834607399733;

    var mymap = L.map('mapid').setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mymap);
    L.marker([latitude, longitude]).addTo(mymap)
        .bindPopup("<b>We are here</b>").openPopup();
}

// Call the setup function when the window is loaded
window.addEventListener('load', setupLeafletMap);


