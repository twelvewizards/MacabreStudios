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

document.addEventListener('DOMContentLoaded', function () {
    var subscribeForm = document.getElementById('subscribe-form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();  // Prevent the default form submission

            // Get the confirmation message element
            var confirmationMessage = document.getElementById('confirmation-message');
            
            // Add the 'confirmation-message-red' class to make the text red
            confirmationMessage.classList.add('confirmation-message-red');

            // Display the confirmation message
            confirmationMessage.style.display = 'block';
        });
    } else {
        console.log('Subscribe form not found');
    }
});