

        // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE // COMMENT OUT THIS FROM HERE
        // Function to check if the user has already verified their age
function checkAgeVerification() {
    return localStorage.getItem('ageVerified') === 'true';
}

// Function to show the main content of the page
function showMainContent() {
    $('#age-form, h5.text-center').fadeOut('slow', function() {
        $('#studio-text').fadeIn('slow', function() {
            $('#our-concepts-button, #rotated-chevron, #crimson-carnival-background, #crimlogo, #crimtext, #crimlearn-more-button-wrapper, #thelocomotive-background, #locologo, #locotext, #locolearn-more-button-wrapper, #echo-background, #echologo, #echotext, #echolearn-more-button-wrapper, #dread-background, #dreadlogo, #dreadtext, #dreadlearn-more-button-wrapper, #footer-section').fadeIn('slow');
            if ($(window).width() > 767) {
                $('#top-nav, #top-logo').fadeIn('slow');
            } else {
                $('#black-rectangle, #mobile-nav-icon, #top-logo').fadeIn('slow');
            }
        });
    });
}

// Check age verification status on page load
$(document).ready(function() {
    if (checkAgeVerification()) {
        showMainContent();
    }

    // Age verification form submission
    document.getElementById('age-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const year = document.getElementById('year').value;

        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        const age = currentDate.getFullYear() - birthDate.getFullYear() - ((currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) ? 1 : 0);

        if (age >= 13) {
            localStorage.setItem('ageVerified', 'true');
            showMainContent();
        } else {
            window.location.href = 'https://disneynow.com/all-shows/disney-channel';
        }
    });

    // Mobile navigation overlay toggle
    $('#mobile-nav-icon').click(function() {
        if ($('#mobile-nav-overlay').css('right') === '0px') {
            $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
            $('#rotated-chevron').fadeIn();  // Show the chevron when menu is closed
        } else {
            $('#mobile-nav-overlay').animate({ right: '0' }, 300);  // Show
            $('#rotated-chevron').fadeOut();  // Hide the chevron when menu is opened
        }
    });

    // Close Mobile navigation overlay when X is clicked
    $('#close-nav-icon').click(function() {
        $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
        $('#rotated-chevron').fadeIn();  // Show the chevron when menu is closed
    });

    // Add click event for the chevron
    $('#rotated-chevron').click(function() {
        // Calculate the position to scroll to
        let targetPosition = $('#crimson-carnival-background').offset().top + ($('#crimson-carnival-background').height() / 2) - ($(window).height() / 2);

        // Animate the scroll
        $('html, body').animate({
            scrollTop: targetPosition
        }, 800); // 800ms animation speed
    });

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('#top-nav, #top-logo').show();
            $('#black-rectangle, #mobile-nav-icon').hide();
        } else {
            $('#top-nav').hide();
            $('#black-rectangle, #mobile-nav-icon, #top-logo').show(); // Added #top-logo here
        }
    });

    // Any other specific functionalities or event listeners can be added here.
});
        // COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE// COMMENT OUT THIS TO HERE
        
        //ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN FROM HERE//ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN FROM HERE//ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN FROM HERE
        // $(document).ready(function() {
        //     $('#age-form, h5.text-center').hide();
        //     $('#studio-text').fadeIn('slow', function() {
        //         $('#our-concepts-button, #rotated-chevron, #crimson-carnival-background, #crimlogo, #crimtext, #crimlearn-more-button-wrapper, #thelocomotive-background, #locologo, #locotext, #locolearn-more-button-wrapper, #echo-background, #echologo, #echotext, #echolearn-more-button-wrapper, #dread-background, #dreadlogo, #dreadtext, #dreadlearn-more-button-wrapper, #footer-section').fadeIn('slow');
        //         if ($(window).width() > 767) {
        //             $('#top-nav, #top-logo').fadeIn('slow');
        //         } else {
        //             $('#black-rectangle, #mobile-nav-icon, #top-logo').fadeIn('slow'); // Added #top-logo here
        //         }
        //     });
        
        //     $(window).resize(function() {
        //         if ($(window).width() > 767) {
        //             $('#top-nav, #top-logo').show();
        //             $('#black-rectangle, #mobile-nav-icon').hide();
        //         } else {
        //             $('#top-nav').hide();
        //             $('#black-rectangle, #mobile-nav-icon, #top-logo').show(); // Added #top-logo here
        //         }
        //     });
        // });
        
        //     // Mobile navigation overlay toggle
        //     $('#mobile-nav-icon').click(function() {
        //         if ($('#mobile-nav-overlay').css('right') === '0px') {
        //             $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
        //         } else {
        //             $('#mobile-nav-overlay').animate({ right: '0' }, 300);  // Show
        //         }
        //     });
        //     // Close Mobile navigation overlay when X is clicked
        //         $('#close-nav-icon').click(function() {
        //             $('#mobile-nav-overlay').animate({ right: '-100%' }, 300);  // Hide
        //         });
        
        //     // Add click event for the chevron
        //     $('#rotated-chevron').click(function() {
        //         // Calculate the position to scroll to
        //         let targetPosition = $('#crimson-carnival-background').offset().top + ($('#crimson-carnival-background').height() / 2) - ($(window).height() / 2);
        
        //         // Animate the scroll
        //         $('html, body').animate({
        //             scrollTop: targetPosition
        //         }, 800); // 800ms animation speed
        //     });

            

            

            

            
        //ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN TO HERE//ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN TO HERE//ADD THIS LINE IF ABOVE IS HIDDEN, HIDE IF ABOVE IS NOT HIDDEN TO HERE
        
        